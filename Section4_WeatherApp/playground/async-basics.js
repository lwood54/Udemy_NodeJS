console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Another callback, but with no delay...');
}, 0);

console.log('Finishing up');
