// Few Global variables

// __dirname - path to current directory
// __filename - file name
// require    - function to use modules(CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);

console.log(module);
setInterval(() => {
    console.log('Hello world');
}, 1000);

setTimeout(() => {
    console.log('Hello world 2');
}, 1000);