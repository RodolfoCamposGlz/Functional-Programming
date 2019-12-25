const users=[
    {
        firstName: 'Bob',
        lastName:'Doe',
        age:37,
    },{
        firstName: 'Rita',
        lastName:'Smith',
        age:21,
    }
    ,{
        firstName: 'Rick',
        lastName:'Fish',
        age:28,
    }
    ,{
        firstName: 'Betty',
        lastName:'Bird',
        age:44,
    },{
        firstName: 'Joe',
        lastName:'Grover',
        age:22,
    },{
        firstName: 'Jill',
        lastName:'Pill',
        age:19,
    },{
        firstName: 'Sam',
        lastName:'Smith',
        age:22,
    }
];

// Necesitamos un array de todos los nombres completos de todos los usuarios
// pero unicamente si estan en sus 20s
// y si su nombre completo tiene desde 10 caracteres en adelante

const isInTwenties = user => user.age >= 20 && user.age < 30;
const getFullName = user => `${user.firstName} ${user.lastName}`;
const hasTenChars = fullName => fullName.length >= 10;

// const requestedUsers = users.filter(isInTwenties)
//     .map(getFullName)
//     .filter(hasTenChars);

const requestedUsers = users.reduce((acc,user)=>{
    const fullName = getFullName(user);
    if(isInTwenties(user) && hasTenChars(fullName))
    {
        acc.push(fullName);
    }
    return acc;
},[]);

console.log(requestedUsers);