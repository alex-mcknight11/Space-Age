import $ from 'jquery';
import 'bootstrap';

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
}

$('.lifeInSpace').text(
	'You would be' +
		ageJupiter +
		'years old if you lived on Jupiter. You would be' +
		ageMars +
		'years old if you lived on Mars. You would be' +
		ageVenus +
		'years old if you lived on Venus. You would be' +
		ageMercury +
		"if you lived on Mercury. It's a good thing you don't live in any of those places!"
);

const ageInput = this.age;
if (this.age < 80) {
	let ageDifference = 80 - this.age;
	$('.deathInSpace').text(
		'You have lived' +
			ageDifference +
			'years past the average American life expectancy. Technology is amazing!'
	);
}