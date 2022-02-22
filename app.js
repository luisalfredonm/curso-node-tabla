
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');
console.clear();
crearArchivo(argv.b, argv.l, argv.h)
.then (nombreArchivo => console.log(nombreArchivo, 'creado con exito'.rainbow))
.catch(err => console.log(err));

