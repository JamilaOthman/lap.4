var name = prompt("Please enter your name");
 while(name ==="" || name ==="null"){
   name = prompt("Please enter your name")
 }

 function usergendr(gender) {
  while (gender !=="f"&&gender !=="m"){
  gender = prompt("try agin: enter f or m")
  }
 }
 var form;
  var form= prompt("Please enter your gender f or m");
 usergendr(form);
 
 function occasion() {
  var occasion;
  var form= prompt("Please enter the occasion");
  while (occasion===""){
  gender = prompt("try agin: enter the occasion")
  }
 }
 occasion();
 



flower = prompt("how many kind of flower do you want");
 for (var i=1; i<= flower; i++){
        document.write('<img width=200px height=100px src="../flowr.jpg">')
 }


