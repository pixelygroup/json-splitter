const fs = require('fs')
const yargs = require('yargs')
const path = require('path')

// Define command line arguments
const options = yargs
  .usage('Usage: -f <file> -s <size> -o <output>')
  .option('f', {
    alias: 'file',
    describe: 'Path to JSON file.',
    type: 'string',
    demandOption: true,
  })
  .option('s', {
    alias: 'size',
    describe: 'Size in Kb (Default: 1000Kb)',
    type: 'number',
  })
  .option('n', {
    alias: 'name',
    describe: 'Preferred output name (Default: Same as file)',
    type: 'string',
  })
  .argv

const filename = path.resolve(options.file)
const fileToSplit = require(filename)

// Check if JSON is an array
if (!Array.isArray(fileToSplit)) {
  console.log('The JSON file has to contain an array of objects')
  return
}

const totalRecords = fileToSplit.length
const files = [[]] // empty first file files[0] to prevent error
const sizeLimitKB = options.size || 1000 // defaults to 1000Kb

for (let i = 0; i<totalRecords; i++){
  const fileIndex = () => files.length -1
  const slice = fileToSplit[i]
  const sliceKiloBytes = JSON.stringify(slice).length /1024
  // const megaBytes = kiloBytes / 1024;
  const currentFileSize = JSON.stringify(files[fileIndex()]).length /1024

  if (currentFileSize + sliceKiloBytes > sizeLimitKB) {
    console.log('Current size:', currentFileSize)
    files.push([])
  }

  files[fileIndex()].push(slice)
}

console.log(`Total files to be written: ${files.length}`)

const dirname = path.dirname(options.file)
const baseName = path.basename(options.file, '.json')
const exportDir = `${dirname}/export`
const exportName = options.name || baseName

// CHECK IF EXPORT FOLDER EXISTS
if (!fs.existsSync(exportDir)){
  fs.mkdirSync(exportDir)
}

files.forEach((slice, index) => {
  const filename = path.resolve(exportDir, `${exportName}-${index}.json`)

  try {
    fs.writeFileSync(filename, JSON.stringify(slice))
  } catch (err) {
    console.error(err)
  }

  console.log(filename)
})

