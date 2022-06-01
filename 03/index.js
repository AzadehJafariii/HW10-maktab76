// Ex.3
// - write a function to validate a JSON with try catch.

const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    //Error
    //JSON is not okay
    return false;
  }

  return true;
};
console.log(isJson('{"name":"John", "birth":"1986-12-14", "city":"Chicago"}'));









