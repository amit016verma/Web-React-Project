// import { apiKey } from "./utils.js";


// import apiKey  from "./utils.js"
// import { apiKey, abc as content} from "./utils.js"
// import * as util from "./utils.js"

// console.log(util.apiKey);

// console.log(content);

//Variables And Values 
// let userMessage = "Hello World!!!";

// const userMessage = "Hello World!!!";
// userMessage = "New Values";

// console.log(userMessage);
// console.log(userMessage);

// Operators
// console.log(10 ===  10);

// if(10 === 10){
// console.log("works")
// }

// Function
// function createGreeting(userName , message = "Hello!") {
//     // console.log(userName);
//     // console.log(message);
//     return "Hi, I am "+userName + ". "+ message;
// }

// const greeting1 = createGreeting("Amit");
// console.log(greeting1);
// const greeting2 = createGreeting("Ayanshi", "Hello, Whats up?");
// console.log(greeting2);

// export default (userName, message) => {
//     console.log("Hello");
//     return userName + message;
// };

// const userName = "Amit"
// const age = 33;

// const user = {
//     name: "Max",
//     age : 34,
//     greet(){
//         console.log("Hello!");
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet();

// class User {

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log("Hi!");
//     }
// }

// const user1 = new User("Ayanshi", 5);
// console.log(user1);
// user1.greet();

// Arrays & Array method

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) =>  item === "Sports")

// console.log(index);

// const editedHobies = hobbies.map((item) => ({ text : item}));

// console.log(editedHobies);

// const [firstName, lastName] = ["Amit", "Verma"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const {name : userName , age} = {
//     name: "Max",
//     age : 34
// };

// console.log(userName);
// console.log(age);

// Spread Operators
// const hobbies = ["Sports", "Cooking"];
// const user = {
//     name : "Max",
//     age : 34
// };

// const newHobbies = ["Reading"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//     isAdmin : true,
//     ...user
// }

// console.log(extendedUser);

// Control Structure

// const password = prompt('Your password');
// if(password === "Hello"){
//     console.log("Hello Works");

// }else if(password === "hello"){
//     console.log("hello works")

// }else{
//     console.log("Access not granted.")

// }

// const hobbies = ["Sports", "Cooking"];

// for(const hobby of hobbies){
//     console.log(hobby);
// }

// Manipulating the DOM, not react

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeOut() {
//     console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//     console.log("Timed out ... again!");
// };
 
// setTimeout(handleTimeOut,2000);
// setTimeout(handleTimeout2, 3000);

// setTimeout(() => {
//     console.log("More timing out...");
// }, 4000);


// function greeter(greeterFn){
//     greeterFn();
// }

// greeter(() => console.log("Hi"));

// function init(){
//     function greet() {
//         console.log("Hi!");
//     }

//     greet();
// }

// init();

let userMessage = 'Hello!';

userMessage = userMessage.concat('!!!!!');

const hobbies = ["Sports", "Cooking"];
hobbies.push("Working");
console.log(hobbies);