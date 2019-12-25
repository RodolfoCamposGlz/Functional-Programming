const mascotas = [
    {nombre: 'Pelusa', edad:12, tipo:'gato'},
    {nombre: 'Puchini', edad:12, tipo:'perro'},
    {nombre: 'Pulga', edad:10, tipo:'perro'},
    {nombre: 'Chanchito feliz', edad:3, tipo:'perro'}
]

const indexed = mascotas.reduce((acc,el) => ({
    ...acc,
    [el.nombre]:el,
}),{})

const anidado = [1,[2,3],4,[5]]
// [1,2,3,4,5]

const plano = anidado.reduce((acc,el)=>acc.concat(el),[])
console.log(plano);