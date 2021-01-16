const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');


let commands = argv._[0];

switch (commands) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for(let tarea of listado){
            console.log('************Tarea por hacer*****'.rainbow);
            console.log(tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log('*********************************'.rainbow);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
        break;
}