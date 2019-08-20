// Object Deconstruction
const person ={
    name:'Yonatan',
    age: 40,
    location:{
        city:'Beer Sheva',
        temp:'hell'
    }
};

const {name : namen, age} = person;

console.log(`Hi, I'm ${namen} and I'm ${age}`);

// Array Deconstruction

const address = ['62 Rimon','Beer Sheva','Israel'];
const [,city,, zip='123'] = address;

console.log(`you are in ${city} and ${zip}`);