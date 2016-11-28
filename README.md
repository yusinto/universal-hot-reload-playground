# universal-hot-reload-playground
To show and discuss problems

Actually running in this problem:

Error: Cannot find module '[/path/to/project/root]/webpack.config.server.dev.js'.
  at [/path/to/project/root]/dist/server/index.js:127:10
  at webpackContextResolve ([/path/to/project/root]/dist/server/index.js:128:4)
  at webpackContext ([/path/to/project/root]/dist/server/index.js:123:30)
  at Object.module.exports.map../index ([/path/to/project/root]/dist/server/index.js:84:43)
  at __webpack_require__ ([/path/to/project/root]/dist/server/index.js:25:29)
  at Object.<anonymous> ([/path/to/project/root]/dist/server/index.js:54:19)
  at __webpack_require__ ([/path/to/project/root]/dist/server/index.js:25:29)
  at [/path/to/project/root]/dist/server/index.js:46:17
  at Object.<anonymous> ([/path/to/project/root]/dist/server/index.js:48:2)
  at Module._compile (module.js:570:32)
  at loader ([/path/to/project/root]/node_modules/babel-register/lib/node.js:144:5)
  at Object.require.extensions.(anonymous function) [as .js] ([/path/to/project/root]/node_modules/babel-register/lib/node.js:154:7)
  at Module.load (module.js:487:32)
  at tryModuleLoad (module.js:446:12)
  at Function.Module._load (module.js:438:3)
  at Module.require (module.js:497:17)
  at require (internal/module.js:20:19)
  at initHttpServer ([/path/to/project/root]/node_modules/universal-hot-reload/lib/initHttpServer.js:17:18)
  at Watching.handler ([/path/to/project/root]/node_modules/universal-hot-reload/lib/index.js:90:59)
  at Watching._done ([/path/to/project/root]/node_modules/webpack/lib/Compiler.js:81:7)
  at Watching.<anonymous> ([/path/to/project/root]/node_modules/webpack/lib/Compiler.js:61:18)
  at Compiler.emitRecords ([/path/to/project/root]/node_modules/webpack/lib/Compiler.js:282:37)
  at Watching.<anonymous> ([/path/to/project/root]/node_modules/webpack/lib/Compiler.js:58:19)
  at [/path/to/project/root]/node_modules/webpack/lib/Compiler.js:275:11
  at Compiler.applyPluginsAsync ([/path/to/project/root]/node_modules/tapable/lib/Tapable.js:60:69)
  at Compiler.afterEmit ([/path/to/project/root]/node_modules/webpack/lib/Compiler.js:272:8)
  at Compiler.<anonymous> ([/path/to/project/root]/node_modules/webpack/lib/Compiler.js:267:14)
  at [/path/to/project/root]/node_modules/async/lib/async.js:52:16
  at done ([/path/to/project/root]/node_modules/async/lib/async.js:246:17)
  at [/path/to/project/root]/node_modules/async/lib/async.js:44:16
  at [/path/to/project/root]/node_modules/graceful-fs/graceful-fs.js:43:10
  at FSReqWrap.oncomplete (fs.js:123:15)
