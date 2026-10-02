 
 // Conditional Statement 


// let mode = "light";
// let color;


// if(mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "black";

// }
// console.log(color);

// if (age > 18) {
//     console.log(" you can vote");
// } 

// if (age < 18 ){
//     console.log("you cannot vote");
// }


//if else statement

// let mode = "light";
// let color ;

// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }

// console.log(color);




// let age = 25;
// if (age >= 18) {
//     console.log("vote");
//     } else {
//         console.log("you cannot vote");
//     }



   // EVEN OR ODD
// let num = 10 ;
// if (num % 2 === 0) {
//     console.log(num, "is even")
// }
// else {
//     console.log(num, "is odd");
// }



// num = 7;
// if( num % 2 === 0) {
//     console.log(num, "is even");
// }
// else{
//     console.log(num, "is odd");
// }


// num = 15;
// if( num % 2 === 0) {
//     console.log(num, "is even");
// }
// else{
//     console.log(num, "is odd");
// }


// ELSE IF - Statement

// let age = 10;
// if( age >= 18){
//     console.log("junior can vote");
// }
// else if (age >= 60) {
//     console.log("senior citizen");
// }
// else{
//     console.log("young generation");
// }

// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// else if(mode === "pink"){
//     color = "pink";
// }
// else if(mode === "blue"){
//     color = "blue";
// }
// else{
//     color = "white";
// }
// console.log (color);


// if (mode === "dark") {
//         console.log(mode); 
//     }

//TERNARY OPERATORS

let age = 26;

let result = age > 18? "adult": "not adult";
console.log(result); //simpler ,compct if-else



    //Switch statement

    const price = "Oranges";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const expr = "outcome";
switch (expr)  {
  case "what if they are lying":
    console.log("they will be thrown out of palace");
  case "what if they are being blame":
    console.log("then it will be shame for us ");
  case "outcome":
    console.log("no one going to belive in our justice");
    break;
  default:
    statements
}