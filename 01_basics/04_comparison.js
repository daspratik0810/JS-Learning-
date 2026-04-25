console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true because in ocmparison > < >= <= , the null is converted to number (0)

// STRICT CHECK :-  ===   used to check not only the value but also the datatype

console.log(2 == "2");  //true as value is same but in actual datatype is not
console.log(2 === "2");  //false because of Strict check as datatype is not same but value is
