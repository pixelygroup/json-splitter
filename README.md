# json-splitter
This small tool splits JSON array file to smaller files (&lt;1MB)

![screenshot](https://github.com/pixelygroup/screenshots/raw/main/json-splitter/splitter.gif)

```
Usage: json-split -f <file> -s <size> -o <output>

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -f, --file     Path to JSON file.                          [string] [required]
  -s, --size     Size in Kb (Default: 1000Kb)                           [number]
  -n, --name     Preferred output name (Default: Same as file)          [string]
```

## How to run without installation
Run using `npx` and pass necessary parameters. The script will create an `export` folder with the slices in the same place as your imported json.
```shell
npx @pixelygroup/json-splitter --size 2000 --file ./path-to-file/the-file.json
```

## How to install globally from Github
1. Download the repository.
2. Enter the directory and run

```
npm install -g .
```

## How to install globally from NPM
In your terminal run command:

```
npm install -g @pixelygroup/json-splitter
```

## How to uninstall
```
npm uninstall -g @pixelygroup/json-splitter
```

## Do you enjoy this package? Help us keep it maintained!
### [Buy us a coffee or become a sponsor](https://github.com/sponsors/pixelygroup)
