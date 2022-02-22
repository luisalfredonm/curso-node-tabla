const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta= 5) => {
    try {

        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index}\n`;

        }
        if (listar) {
            console.log('============='.green);
            console.log('Tabla del:', base);
            console.log('============='.blue);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;


    } catch (error) {
        throw (error)
    }

}

module.exports = {
    crearArchivo
}