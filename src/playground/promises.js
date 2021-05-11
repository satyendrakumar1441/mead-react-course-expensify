const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Satya',
        //     age: 52
        // });
        reject('Something went wrong!');
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log('resolved', data);
}).catch((error) => {
    console.log('Error:', error);
});


console.log('after');