let userName=prompt("Enter your name please!!")
if (userName){
  console.log("Hello  "+userName+ " !")
}else{
  console.log("Hello !")
}
let userQuestion=prompt("Ask the your question .");
console.log(userName+ "  you ask this question:  " + userQuestion);
let randomNumber=Math.floor(Math.random()*8);
 let eightBall=" ";
 switch(randomNumber){
   case 0:
   console.log("It is certain");
   break;
   case 1:
   console.log("It is decidedly so");
   break;
   case 2:
   console.log("Reply hazy try again");
   break;
   case 3:
   console.log("Cannot predict now");
   break;
   case 4:
   console.log("Do not count on it");
   break;
   case 5:
   console.log("My sources say no");
   break;
   case 6:
   console.log("Outlook not so good");
   break;
   case 7:
   console.log("Signs point to yes");
   break;
 };
 console.log(eightBall);
 
 //EXTRA

 let myQuestion=prompt("Ask the your question .");
console.log(userName+ "  you ask this question:  " + myQuestion);

 if (randomNumber==0){
  alert("It is certain");
 }else if(randomNumber==1){
  alert("It is decidedly so");
 }else if(randomNumber==2){
  alert("Reply hazy try again");
 }else if(randomNumber==3){
  alert("Cannot predict now");
 }else if(randomNumber==4){
  alert("Do not count on it");  
 }else if(randomNumber==5){
  alert("My sources say no"); 
 }else if(randomNumber==6){
  alert("Outlook not so good");
 }else if(randomNumber==7){
  alert("Signs point to yes");
 }else{
   alert("Try again")
 }