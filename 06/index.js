// Ex.6
// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function(resolve, reject) {
setTimeout(() => {
throw new Error("Whoops!");
}, 1000);
}).catch(alert);



// I think two syntaxes are mixed with each other. If we want catch the error 
// by new promise ((throw)) should be replaced with ((reject)), if we want to 
// catch error with ((throw and catch)) we need ((try)).
// Here catch didn't receive anything and error didn't handle.



// correct answer:

// const result = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//       reject(new Error("Whoops!"));
//   }, 1000);
// });
// result.catch(alert);


