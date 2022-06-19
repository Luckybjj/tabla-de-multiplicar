const { crearArchivo } = require('./helpers/multiplicar')
// Para utilizar yargs 
const argv = require('./config/yargs')
                
console.clear();
// console.log(argv); 

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'.brightYellow))
    .catch( err => console.log(err))













