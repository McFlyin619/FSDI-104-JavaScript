// console.log("Executed");

// loop

// for(let i=0; i<10;i++){
//     console.log(`Number: ${i}`);
// }

// const cart = ['product1', 'product2', 'product3', 'product4', 'Bike','Car', 'Traction bar'];
// console.table(cart);
//travel the array
// p=position (index)
// intelligent way
// for(let p=0; p<cart.length; p++){
//     console.log(`Products: ${cart[p]}`);
// }

// not good
// console.log(`Products: ${cart[0]}`);
// console.log(`Products: ${cart[1]}`);
// console.log(`Products: ${cart[2]}`);
// console.log(`Products: ${cart[3]}`);

// const logged = true;

// if(logged){
//     console.log("Welcome to the system.");
// }else{
//     console.log("Register into system.");
// }
// === means same value ie true/number/string AND same datatype boolean/number/variable
// const age = 100;

// if(age === 100){
//     console.log('You are superhero.');
// }else{
//     console.log("you are a mortal.");
// }

// let cash = 500;
// let totalCart = 500;
// let card = false;

// if(cash > totalCart){
//     console.log("Payment Complete");
// }else if(card == true){
//     console.log('The customer pay with debit/credit card');
// }else{
//     console.log("Declined");
// }

// let hour = 0;

// if(hour >= 0 && hour <= 12){
//     console.log('Good Morning');
// }else if(hour > 12 && hour <= 18){
//     console.log('Good Afternoon');
// }else if(hour > 18 && hour <= 24){
//     console.log('Good Night')
// }else{
//     console.log("Invalid");
// }

// Switch //

// const method = 'Cash';
// switch(method){
//     case 'Cash':
//         hello();
//         break;
//     case 'Debit Card':
//         console.log(`Payment Method: We do not accept ${method}`);
//         break;
//     case 'Credit Card':
//         console.log(`Payment Method: We can not accept ${method}`);
//         break;
//     default:
//             console.log("You didnt pay .... ");
//         break;
// }

// Function. allows you to call a large block of code and execute it with a small block

// function hello(){
//     //function body
//     console.log("Hello World!");
// }

// hello();

// let traveling = function(destination){
//     return 'Traveling to ' + destination;
// }

// let travel;

// travel = traveling('Italy');

// console.log(travel);

// let car = model => 'My vehicle is a/an ' + model;
// let myVehicle;

// myVehicle = car('BMW')
// console.log(myVehicle)

// const sum = (a,b) => a+b;
// console.log(sum(5,3));

//autocalling function

// (function(topic){
//     console.log(`I'm Learning ${topic}`)
// })("JavaScript");

