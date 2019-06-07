# Full-Stack TypeScript Boilerplate

This project is intended to serve as an example usage of [TypeScript 3 project references](https://www.typescriptlang.org/docs/handbook/project-references.html) for monorepos.

* All TypeScript-generated files are placed in a lib/ directory which prevents source code from being mixed with code from the compiler.
* Webpack-generated client code for distribution is placed in a dist/ directory for the same purpose.
* The client development script does not save code to the disk.
* If you use a different bundler or framework this can serve as an example of how to handle all compiling and bundling with clean project directories that only contain human-written source code.
* There is no extraneous monorepo tooling such as Lerna, just root-level bash scripts.

## Explanation

The client exports type defintions but cannot import from server or test because circular references throw an error. The server references types from client while test references types from both the client and server.

## Structure

```
root/
|  package.json
|  tsconfig.json
|__client/
|  |  package.json
|  |  tsconfig.json
|  |  webpack.config.js
|  |__src/
|     |  index.tsx
|__server/
|  |  package.json
|  |  tsconfig.json
|  |__src/
|     |  index.ts
|__test/
|  |  package.json
|  |  tsconfig.json
|  |  index.ts
|__lib/*
|  |__client/*
|  |__server/*
|  |__test/*
|__dist/**
   |__client/**
* Created by build script, contains tsconfig.tsbuildinfo and mirrors its build source
** Output by webpack production script
```

## Prerequisites

* [Nodemon](https://www.npmjs.com/package/nodemon) - Most Node.JS users already have this installed globally, but "nodemon" can be replaced with "node" in the dev:server and dev:test scripts.

## Usage

All commands are run from the root directory. The "install" script must be run before "dev:client" while the "build" script must be run before "dev:server" and "dev:test".

* `npm run install` - Runs npm install in the client/ directory, which has a boilerplate React/Webpack setup
* `npm run build` - Runs the TypeScript "tsc --build" command to create lib/ with .d.ts and .js files for each .ts file
* `npm run dev:client` - Uses webpack-dev-server command in client/
* `npm run dev:server`
  `npm run dev:test` - Use nodemon on the corresponding .js files created by the build script
* `npm run prod:client` - Run webpack with the configuration in production mode

## Contribution

Submit a pull request.

## License

None (public domain)