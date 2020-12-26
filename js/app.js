var name = prompt("Please enter your name");
 while(name ==""||name =="null"){
   name = prompt("Please enter your name")
 }
 function greatuser() {
  var form;
  var form= prompt("Please enter your gender f or m");
  while (form !=="f"&&form !=="m"){
  gender = prompt("try agin: enter f or m")
  }
}
greatuser();


flower = prompt("how many kind of flower do you want");
 for (var i=1; i<= flower; i++){
        document.write('<img width=200 height=100 src="../flowr.jpg">')
 }


