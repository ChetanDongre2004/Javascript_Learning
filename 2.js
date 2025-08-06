// variable is a container for storing data values
 const account_Id="12345"; 
 let accountemail= "chetan@gmail.com";
 var accountpassword = "12345";// scope problem RSOLVE
 accountCity="nagpur"
 let accountstate; // undefined variable



 //account_Id=2;
 //console.log(account_Id); not allowed
 accountemail=" abc@gmail.com";
 console.log(accountemail);
 console.table([ account_Id, accountemail, accountpassword, accountCity,accountstate]);
// console.log(" THIS IS A TEST : ");

/* Prefer not to use var, use let or const instead  
 */ 
console.log( typeof " string");
console.log( typeof 4.5);
let mood="happy";

console.log( mood);
mood="sad";
console.log( mood); 
console.log(Math.min(2,4));