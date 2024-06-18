# Getting Started 

## Available Scripts

Resole the dependencies, run:

### `npm install` at the same directory as the `package.json` file.

Run the test in project directory, you can run:

### `npm test -- --verbose=true <nameOfTestingFile.test.js>`

or simply in this case 
### `npm test -- --verbose=true` (since there's only one .test.js file)

### `npm test` also works (sometimes), but on some cases it returns `console.error`

# Configuration file

## Jest 

### `jest.config.js` holds the configuration for Jest in this project. It should always be at the root of the project.

It is bothersome, please don't make any change unless you need to, unless it reports some weird syntax. It is advisable for you to check out its doc before making any change:
<https://jestjs.io/docs/getting-started> 
