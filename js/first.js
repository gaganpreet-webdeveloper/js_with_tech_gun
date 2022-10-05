/*
let x = document.getElementById("h");
x.addEventListener("click", function click(e) {
	e.target.innerHTML =
		"Ne jedhe mitra kraune lala lala ohh geraa kolo kerhe hune aww";
});
let a = 5;
a = "Gagnan";
a = "Ga\23ga";
console.log(a);
*/
// document.getElementById("h").innerHTML = "MY name is Gaganpreet singh";

// pop ups

// 1. alert()

// alert("There is a bus behind you.");
// let name1 = prompt("Give me your name ?");
// const con = confirm("Are you sure to see your name in the document ? ");
// if (con === true) {
// 	document.write(`your name is : ${name1}`);
// } else {
// 	document.write("You are not willing to see your name.");
// }

// THE ARGUMENT object (By using this object we create a generalize add function)

// function add() {
// 	let res = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		res += arguments[i];
// 	}
// 	console.log("The addition result value is : " + res);
// }

// add(3, 5);

// Object in js

const person = {
	//properties
	name: "Gaganpreet Singh",
	class: "MCA",
	//Methods
	sayhello() {
		console.log("Gagan is the only king on the earth");
	},
};
console.log(person);
for (key in person) {
	console.log(key + " : " + person[key]);
}
