// Ex.5
// - Are these code fragments equal? In other words, do they behave the same way in
// any circumstances, for any handler functions?


promise.then(f1).catch(f2);
Versus:
promise.then(f1, f2);

// We can also handle error by ((then)) Syntax(f2 in line 7), 
// but with ((one then)) we can just receive ((either a resolve or a reject)) output. 
// In other words, when we catch error with then we can't get resolve at the same time.
// So first way(line 5) is safer.