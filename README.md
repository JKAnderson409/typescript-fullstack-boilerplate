# Full-Stack TypeScript Boilerplate

This project is intended to serve as an example usage of [TypeScript 3 project references](https://www.typescriptlang.org/docs/handbook/project-references.html) for monorepos.

* All TypeScript-generated files are placed in a lib/ directory which prevents source code from being mixed with code from the compiler.
* Webpack-generated client code for distribution is placed in a dist/ directory for the same purpose.
* The client development script does not save code to the disk, use `yarn prod:client` to generate the client-side code for production.
* If you use a different bundler or framework this can serve as an example of how to handle all compiling and bundling with clean project directories that only contain human-written source code.
* There is no extraneous monorepo tooling such as Lerna, just simple root-level bash scripts.

## Explanation

The client exports type defintions but cannot import from server or test because circular references throw an error. The server references types from client while test references types from both the client and server. All dependencies are installed in the root directory. This means that there is ambiguity as to which part of the monorepo uses which package but it also means that nothing needs to be installed more than once, such as every project folder having an installation of a utility library such as lodash or ramda.

## Structure

```
root/
|  package.json
|  tsconfig.json
|  client/
|  |  tsconfig.json
|  |  webpack.config.js
|  |  src/
|     |  index.tsx
|__server/
|  |  tsconfig.json
|  |  src/
|     |  index.ts
|__test/
|  |  tsconfig.json
|  |  index.ts
|__lib/*
|  |  client/*
|  |  server/*
|  |  test/*
|__dist/**
   |  client/**
* Created by build script, contains tsconfig.tsbuildinfo and mirrors its build source
** Output by webpack production script
```

## Prerequisites

* [Nodemon](https://www.npmjs.com/package/nodemon) - Most Node.JS users already have this installed globally, but "nodemon" can be replaced with "node" in the dev:server and dev:test scripts.

*[Typescript/Webpack] - The scripts assume that you have "tsc" and "webpack-dev-server" commands available in your PATH.

## Usage

All commands are run from the root directory. Yarn is used in the script usage examples but npm can be used (e.g. "npm install && npm run build").

* `yarn install`
* `yarn build` - Runs the TypeScript "tsc --build" command to create lib/ with .d.ts and .js files for each .ts file
* `yarn dev:client` - Uses webpack-dev-server (Uses localhost:8080)
* `yarn dev:server`
  `yarn test` - Use nodemon on the corresponding .js files created by the build script
* `yarn prod:client` - Run webpack with the configuration in production mode to create /dist in root

## Contribution

Submit a pull request.

## License

None (public domain)