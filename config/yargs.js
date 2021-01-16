const descripcion = {
    demandOption: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'acturalizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}