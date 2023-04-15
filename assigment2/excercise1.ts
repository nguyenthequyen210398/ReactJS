//  question1:
var date: number[] = [2020,12,8]; 
var [year, month, day] = date;
console.log("Day: " + day);
console.log("Month:" + month);
console.log("Year:" + year); 

// question2
const person = {
    firstName: "nguyen",
    lastName: "a",
    age: 20
};
var{firstName: a,lastName: b,age: c} = person;
console.log("firstName: " + a);
console.log("lastName: " + b);
console.log("age: " + c);