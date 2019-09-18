function characters(str){
   var passw = /^.{9,}$/;
   if(str.match(passw)){
       return true;
   }else{
       throw new Error("The password must be greater than 8 characters");
   }
}
function uppercase(str){
   var passw = /[A-Z]/;
   if(str.match(passw)){
       return true;
   }else{
      throw new Error("The password must contain at least 1 Uppercase letter")
   }
}

function lowercase(str){
   var passw = /[a-z]/;
   if(str.match(passw)){
       return true;
   }else{
      throw new Error("The password must contain at least 1 lowercase letter")
      
   }
}

function number(str){
   var passw = /^(?=.*\d)/;
   if(str.match(passw)){
       return true;
   }else{
      throw new Error("The password must contain at least 1 number")
   }
}
function notNull(str){
   var passw = /^$‍/;
   if(str.match(passw)){
       return true;
   }else
   {
      throw new Error("The password must not be empty")
   }
}
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
 



 
