// Activity-1

//  Task-1
let num = -2;

if (num > 0) console.log("POSITIVE");
else if (num < 0) console.log("NEGATIVE");
else console.log("ZERO");

// Task-2
let age = 100;

if (age >= 18) console.log("Candidate is Eligible To Vote.");
else console.log("Candidate is Not Eligible To Vote.");

// Actiity-2
console.log("\n");
// Task-3
let num1 = 30;
let num2 = 10;
let num3 = 20;

if (num1 >= num2) {
  if (num1 >= num3) console.log(num1, " is Largest Number.");
  else console.log(num3, " is Largest Number.");
} else {
  if (num2 >= num3) console.log(num2, " is Largest Number.");
  else console.log(num3, " is Largest Number.");
}

// Activity-3
console.log("\n");
// Task-4
let numWeek = 5;

switch (numWeek) {
  case 1:
    console.log(numWeek, " is Sunday.");
    break;
  case 2:
    console.log(numWeek, " is Monday.");
    break;
  case 3:
    console.log(numWeek, " is Tuesday.");
    break;
  case 4:
    console.log(numWeek, " is Wednesday.");
    break;
  case 5:
    console.log(numWeek, " is Thursday.");
    break;
  case 6:
    console.log(numWeek, " is Friday.");
    break;
  case 7:
    console.log(numWeek, " is Saturday.");
    break;
  default:
    console.log("Please Enter Numbers Between 1 to 7 Only.");
}

// Task-5

let score = 73;
let grade;
switch (true) {
  case (score >= 91 && score<=100): grade = "A";
    console.log("Grade ", grade);
    break;
  case (score >= 76 && score<=90): grade = "B";
    console.log("Grade ", grade);
    break;
  case (score >= 51 && score<=75): grade = "C";
     console.log("Grade ", grade);
    break;
  case (score >= 35 && score<=50): grade = "D";
    console.log("Grade ", grade);
    break;
  case (score<=34): grade = "F";
    console.log("Grade ", grade);
    break;
  default: console.log("Please Enter Numbers Between 1 to 100 Only.");
}

// Activity-4
console.log("\n");
// Task-6
let n = 6;
console.log(n%2==0? "Number is Even":"Number is Odd");

// Activity-5
console.log("\n");
// Task-7
let year = 2200;
if (year%400==0) console.log(year, " is Leap Year");
else{
  if (year%4==0 && year%100!=0) console.log(year, " is Leap Year")
  else console.log(year, " is Not Leap Year")
}  