import Raven from 'raven-js';

Raven.config('http://da5fd067532f430db430873451917ea1@localhost:8080/2').install()
console.log('Start raven error loggin');

setTimeout(() => {
    throw new Error('My Custom SetTimeout Error')
}, 3000);

setTimeout(() => {
    console.warn('Test warning')
}, 4000);