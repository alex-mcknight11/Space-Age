// // import $ from 'jquery';
// // import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './src/css/styles.css';
// import userAge from "./src/index.html";

export default class AgeCalculator {
	constructor(age) {
		this.age = age;
	}
	ageJupiter() {
		return this.age / 11.86;
	}
	ageMars() {
		return this.age / 1.88;
	}
	ageVenus() {
		return this.age / 0.62;
	}
	ageMercury() {
		return this.age / 0.24;
	}
	ageDifferenceJupiter() {
		if (this.age < 80) {
		let ageDifference = 80 - this.age;
		console.log(this.ageJupiter());
		return this.ageJupiter() - (80 / 11.86);
	}
}
	ageDifferenceMars() {
		if (this.age < 80) {
		let ageDifference = 80 - this.age;
		return this.ageMars() - (80 / 1.88);
		}
}
ageDifferenceVenus() {
	if (this.age < 80) {
	let ageDifference = 80 - this.age;
	return this.ageVenus() - (80 / 0.62);
	}
}
ageDifferenceMercury() {
	if (this.age < 80) {
	let ageDifference = 80 - this.age;
	return this.ageMercury() - (80 / 0.24);
	}
}
}

// $('.lifeInSpace').text(
// 	'You would be' +
// 		ageJupiter +
// 		'years old if you lived on Jupiter. You would be' +
// 		ageMars +
// 		'years old if you lived on Mars. You would be' +
// 		ageVenus +
// 		'years old if you lived on Venus. You would be' +
// 		ageMercury +
// 		"if you lived on Mercury. It's a good thing you don't live in any of those places!"
// );

// const ageInput = this.age;
// if (this.age < 80) {
// 	let ageDifference = 80 - this.age;
// 	$('.deathInSpace').text(
// 		'You have lived' +
// 			ageDifference +
// 			'years past the average American life expectancy. Technology is amazing!'
// 	);