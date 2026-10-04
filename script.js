 
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

// let age = 26;

// let result = age > 18? "adult": "not adult";
// console.log(result); //simpler ,compct if-else



    //Switch statement

//    



//LETS PRACTICE

//Q1 . Get user to input a number using prompt ("Enter a number :"). Check if the number is a multiple of 5 or not .

// alert("hello"); //one time popup
 
// let num  = prompt("Enter a number :");

// if(num % 5 === 0){
//     console.log(num ," number is multiple of 5");
// }
// else {
//     console.log(num,"number is NOT multipl of 5");
// }

// Q2 . write a code which can give grades to students according to their scores:

// let score = prompt("Enter the marks");
// if ( score >= 80) {
// console.log(A);
// }
// else if(score <= 70) {
//     console.log(B);
// }
// else if(score <= 60) {
//     console.log(C);
// }
// else if(score <= 50) {
//     console.log(D);
// }
// else if (score <= 40) {
//     console.log(F);
// }
//   else {
//         console.log(score);
//     }

    //now the real answer


    // let score = 70;
    // let grade;
    // if(score >= 90 && score <= 100){
    //     console.log("garde A");
    //  }
    //  else if(score >= 70 && score <= 80){
    //     console.log("grade B");
    //  }
    //   else if(score >= 60 && score <= 69){
    //     console.log("grade C");
    //  }
    //   else if(score >= 50 && score <= 49){
    //     console.log("grade D");
    //  }
    //   else if(score >= 0 && score <= 49){
    //     console.log("grade F = fail");
    //  }
    
     
//this is QS2. JS Program

    //let score = prompt("Enter you score(0-100):");
    let score = 10;
    let grade;

    if (score >= 90 && score <= 100) {
        grade = "A";
     }
     else if (score >= 70 && score <= 80) {
        grade = "B";
     }
      else if (score >= 60 && score <= 69) {
        grade = "C";
     }
      else if (score >= 50 && score <= 49) {
        grade = "D";
     }
      else  {
        grade = "fail";
     }
     
     console.log("accroding to you grade you :", grade);
