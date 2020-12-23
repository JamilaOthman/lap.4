alert("Hello!!we are happy to see you");
var name = prompt("Please enter your name");
confirm("Press contact us for help");
var today= new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
  greeting= 'Good evening!';
} else if (hourNow > 12) {
greeting = ' Good afternoon!';
} else if (hourNow > 0) {
greeting = 'Good morni ng!';
} else {
greeting = 'Welcome! ' ;
}
document.write( ' <h3>' +greeting + name+' </ h3> '); 
