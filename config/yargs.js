const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,  // siempre nos debe devolver un valor
                    describe: 'Es la base de la tabla de multiplicar',
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,  // siempre nos debe devolver un valor
                    describe: 'Hasta donde se va a multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,  // siempre nos debe devolver un valor
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check((argv, options) => {     // verofoca si ciertas condiciones son aplicadas, se puede establecer cierta logica.
                    // console.log('yags', argv)  // ejecutar node app --base=abc
                    if ( isNaN( argv.l )) {
                        throw 'Debe seleccionar la opcion de listar'
                    }
                    return true
                })
                .argv;


module.exports = argv;


