 
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

   //  let score = prompt("Enter you score(0-100):");
   //  //let score = 10;
   //  let grade;

   //  if (score >= 90 && score <= 100) {
   //      grade = "A";
   //   }
   //   else if (score >= 70 && score <= 80) {
   //      grade = "B";
   //   }
   //    else if (score >= 60 && score <= 69) {
   //      grade = "C";
   //   }
   //    else if (score >= 50 && score <= 49) {
   //      grade = "D";
   //   }
   //    else  {
   //      grade = "fail";
   //   }
     
   //   console.log("accroding to you grade you :", grade);


   // CHAPTER TWO LOOPS AND CONDITIONAL STATEMENTS

   // for loop 😊☺️☺️☺️☺️
// print 1 to 5
// for(i = 1; i<= 5; i++){   //i<=1,2<=5 3<=5 4<=5 5<=5
//  console.log("apana college");
// }

// for(let count=1;count<=10000;count++){
//    console.log("APANA COLLEGE");  //5 times execute
// }
// console.log("loop has ended");
// console.log("yes if this is printed means the loop has ended");


//CALCULATE sum of 1 to 5
// let sum = 0;
// for(let i=1; i<=5; i++) {
// sum = sum + i; //sum=0+1,1+2,3+3,6+4,10+5
// }
// console.log("sum=  ",sum)
// console.log("loop has ended");


//CALCULATE sum of 1 to n
// let sum = 0;
// let n = 100;
// for(let i=1; i<=n; i++) {
// sum = sum + i; //sum=0+1,1+2,3+3,6+4,10+5
// }
// console.log("sum=  ",sum)
// console.log("loop has ended");

//print 1 to 5
for(let i=1;i<=5;i++){  //let execute once in block scope in culry braces 
   console.log("i=", i);  //5 times execute
}
console.log(i); ///thst why here we didt get i = 6 
console.log("loop has ended");

// for (var i = 1;i <=5; i++) {
//    console.log("i =", i);  //5 times execute
// }
// console.log(i);
// console.log("loop has ended");  //here you can use var to redeclared var vlaue again and again but not in let 
//but its not correct way so we use let