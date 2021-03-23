# vue-comlink-test
Minimal example for using [worker-loader](https://github.com/webpack-contrib/worker-loader) and [Comlink](https://github.com/GoogleChromeLabs/comlink) with [Vue](https://vuejs.org) and [TypeScript](https://www.typescriptlang.org).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Steps for implementation
1. > $ npm install worker-loader --save-dev

2. > $ npm install comlink --save

3. Modify/Add [```vue.config.js```](./vue.config.js) to configure the module rule that web-worker code files should be loaded with ```worker-loader```.

4. Modify [```tsconfig.json```](./tsconfig.json) to include the ```typings``` folder as a type root ```"typeRoots": [..., "typings"]```.

5. Add the folder ```src/typings``` and the file [```src/typings/worker-loader.d.ts```](./src/typings/worker-loader.d.ts). Here any import using the worker-loader module are defined as empty shells. In this case the WebpackWorker class with the toUpperCase function. This is important for TypeScript to resolve type information of our web-worker.

6. Implement the web-worker like [```src/my.worker.ts```](./src/my.worker.ts). This class needs to match the function definitions from the typings file.

7. In the ```App.vue``` or wherever needed, import Comlink and our web-worker using the worker-loader module such as:
   > import * as Comlink from 'comlink';

   > import WebpackWorker from 'worker-loader!@/my.worker';

8. Create the web-worker using Comlink like:
   > worker = Comlink.wrap<WebpackWorker>(new WebpackWorker());

9. Use the worker like any other class instance with the advantage that all calls return a Promise:
   > worker.toUpperCase(...).then(...).catch(...);