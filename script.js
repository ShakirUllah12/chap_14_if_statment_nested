// chapter nomber 14 
// if statment nesteed

if (10 >8){
    console.log("yes 10 is greater");
}

if (8 >5){
    console.log("yes 8 is greater than 5");
}

const userName=prompt("please enter your name");
let pasword="";

if (userName==="shakir"){
    pasword=prompt("please enter your pasword");
}
if(pasword==="secret"){
    document.write("log in student");
}
else{
    document.write("user not found please check your user name");
}


const  age=+prompt("please enter your age");
const istStudent=+prompt("are you a student nomber n0/n1.yes");

if (age <12){
    document.write("child ticket :$5");
}
else{
    if (age>=12 && < 18 && istStudent){
        document.write("studdent ticket :$10"); 
    
}
else{
    document.write("a cover ticket:$15");
}