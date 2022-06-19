const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} x ${i} = ${base * i}\n`.green;
        }
       

        if (listar) {

            console.log('========================'.brightRed);
            console.log(`      Tabla del:`, base);
            console.log('========================'.red)
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        // let nombreArchivo = (`tabla-${base}.txt`)
        // return nombreArchivo
        return `tabla-${base}.txt`.blue

    } catch (error) {
        throw error
    }


}
// si se necesita expotar algo
// module ---> objeto global de node
module.exports = {
    crearArchivo
}