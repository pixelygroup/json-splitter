# json-splitter
This small tool splits JSON file to smaller files (&lt;1MB)

```
Usage: json-split -f <file> -s <size> -o <output>

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -f, --file     Path to JSON file.                          [string] [required]
  -s, --size     Size in Kb (Default: 1000Kb)                           [number]
  -n, --name     Preferred output name (Default: Same as file)          [string]
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
// NOT YET AVAILABLE
npm install -g @pixelygroup/json-splitter
```

## How to uninstall
```
npm uninstall -g @pixelygroup/json-splitter
```