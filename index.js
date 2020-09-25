const fs = require('fs')
const jsonArray = require('./import.json') // Array of objects

if (!Array.isArray(jsonArray)) {
  console.log('The JSON file has to contain an array of objects')
} else {

  const sizeLimitKB = 1000

  const totalRecords = jsonArray.length

  const files = [[]] // empty first file files[0]
  const fileIndex = () => files.length -1

  for (let i = 0; i<totalRecords; i++){
    const slice = jsonArray[i]
    const sliceKiloBytes = JSON.stringify(slice).length /1024
    // const megaBytes = kiloBytes / 1024;
    const currentFileSize = JSON.stringify(files[fileIndex()]).length /1024

    if (currentFileSize + sliceKiloBytes > sizeLimitKB) {
      console.log(currentFileSize, sliceKiloBytes)
      files.push([])
    }

    files[fileIndex()].push(slice)
  }

  console.log(`Total files to be written: ${files.length}`)

  files.forEach((slice, index) => {
    const filename = `export/import-slice-${index}.json`

    try {
      fs.writeFileSync(filename, JSON.stringify(slice))
    } catch (err) {
      console.error(err)
    }

    console.log(filename)
  })

}