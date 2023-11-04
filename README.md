# Typescript - Boilerplate

## Requirements:
Install [Node.js](https://nodejs.org/en/download/)
* This includes the Node package manager: `npm`

In case you have `yarn` installed and prefer using it, follow the 'yarn' commands henceforth.

### Test your installation
```bash
node -v
```

Based on your preferred package manager:

```bash
npm -v
```

or 

```bash
yarn -v
```

## Getting started

Install the dependencies in the repository by running:

```bash
npm install
```

or

```bash
yarn install
```

## Building the application

Before running the application, we have to compile the typescipt files. The compiled files are stored in the build folder.

```bash
npm run build
```

or

```bash
yarn run build
```

### Watch-mode
If you want to build in watch mode, you can run:

```bash
npm run build:watch
```

or

```bash
yarn run build:watch
```

## Running the application

We have setup `index.ts` as the entry point file. To run it's compiled `js` counterpart, run the command:

```bash
npm start
```

or

```bash
yarn start
```

## Testing

We are using the [`jest`](https://jestjs.io/) library for testing

To run the tests, run:

```bash
npm test
```

or

```bash
yarn test
```

Jest recognises the files ending with `.test.ts`. Make sure you place your tests in those files.

In order to use jest with typescript, we are using the [ts-jest](https://kulshekhar.github.io/ts-jest/docs/) typescript preprocessor.

### Watch-mode
To run the tests in watch mode, you can run:

```bash
npm run test:watch
```

or

```bash
yarn run test:watch
```