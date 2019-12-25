const numeros = [1,2,3,4,5,6,7,8,9]

const mascotas = [
    {nombre: ' ', edad:12, raza: 'perro'},
    {nombre: ' ', edad:12, raza: 'perro'},
    {nombre: ' ', edad:12, raza: 'perro'},
    {nombre: ' ', edad:12, raza: 'perro'},
    
];

const perros = mascotas.filter(x => x.raza == 'perro')

const gatos = mascotas.filter(x => x.raza == 'gato')

console.log(gatos);
