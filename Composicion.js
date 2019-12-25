const _ = require('lodash');
const compose = (...fns) => x => fns.reduceRight((y,f) => f(y), x);
const users = [
    {id:1, nombre:'Rodolfo', apellido:'Campos'}
];
const head = x => x[0];
const capitalizaNombreYApellido = x =>({
    nombre: _.upperFirst(x.nombre),
    apellido: _.upperFirst(x.apellido),
})
const generaNombre = x => `${x.nombre} ${x.apellido}`

//point free
const getNombreCompleto = compose(generaNombre,capitalizaNombreYApellido,head)
    

const x = getNombreCompleto(users);
console.log(x);