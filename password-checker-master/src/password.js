
function passwordIsValid(password){
var uppercase = /[A-Z]/;
var lowercase = /[a-z]/;
var validChars = /^.{9,}$/
var numbers = /^(?=.*\d)/;;

if(password === ""){
    throw new Error("The password should not be null");
}

if(!password.match(lowercase)){
    throw new Error("The password should have at least one lowercase letter");
}
if (!password.match(uppercase)){
    throw new Error("The password must have atleast 1 uppercase letter");
}

if(!password.match(numbers)){
   throw new Error("The password should have at least one number");
}

if(!password.match(validChars)){
  throw new Error("The password should be larger than 8 characters");
}

else {
  return true
}
}
console.log(passwordIsValid(""))

function passwordIsOkay(password) {
  
   let checkPass1  = /^[A-Za-z0-9]{9,}$/;
   let checkPass2  = /^(?=.*[A-Z])[A-Z]+/;
   let checkPass3  = /^(?=.*[a-z])[a-z]+/;
   let checkPass4  = /^(?=.*[0-9])[0-9]+/;
 
   if (checkPass1.test(password) === true && checkPass2.test(password) === true) {
     return true;
   } else
   if (checkPass1.test(password) === true && checkPass3.test(password) === true) {
     return true;
   } else
   if (checkPass1.test(password) === true && checkPass4.test(password) === true) {
     return true;
   } else{
     return true
   }
 }
 



 
