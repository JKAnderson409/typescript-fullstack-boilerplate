# Full-Stack TypeScript Boilerplate

This project is intended to serve as an example usage of [TypeScript 3 project references](https://www.typescriptlang.org/docs/handbook/project-references.html) for monorepos.

## Structure

```
root/
|  package.json
|  tsconfig.json
|__client/
|  |  package.json
|  |  tsconfig.json
|  |__src/
|     |  index.tsx
|__server/
|  |  package.json
|  |  tsconfig.json
|  |__src/
|     |  index.ts
|__test/
   |  package.json
   |  tsconfig.json
   |  index.ts
```

## Usage

All commands are run from the root directory.

  `npm run install` -- runs npm install in the client/ directory, which has a boilerplaye 