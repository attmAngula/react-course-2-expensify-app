//
// Object Destructuring
//

// const person = {
//     name: 'ATTM Solutions',
//     age: 1,
//     location: {
//         city: 'United Kingdom',
//         temp: 88
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);




//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
const [product, ,price] = item;
console.log(`A meduim ${product} costs ${price}`);