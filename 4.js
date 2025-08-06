// conversio and opeRATIONS
let score=33;
console.log(typeof (score)); // number
let y= String(score); // convert number to string
console.log(typeof (y)); // string


let nan="3abc";
let value=Number(nan); // convert string to number
console.log(value); // NaN (Not a Number)
// " 33" => 33
// '"33qbc" => NaN

let isloggedin=1;
let booleanValue=Boolean(isloggedin); // convert number to boolean
console.log(booleanValue); // true
// 1 => true
// 0 => false