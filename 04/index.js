// Ex.4
// - what is the Output of the code below and why ?


let promise = new Promise(function(resolve, reject) {
resolve(1);
setTimeout(() => resolve(2), 1000);
});
promise.then(alert);


// result is 1, because  ((then))  find rosolve(1) sooner and alert it.