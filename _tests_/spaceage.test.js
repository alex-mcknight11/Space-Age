import { TestScheduler } from 'jest';
import AgeCalculator from '../src/space.js';

beforeEach(function () {
	let userInput = [25];
});

describe('AgeCalculator', () => {
	const space = new AgeCalculator(25);
	test('should calculate age based on Jupiter equation', () => {
		const ageJupiter = space.ageJupiter();
		expect(ageJupiter).toBeCloseTo(2.1079, 3);
	});

	test('should calculate age based on Mars equation', () => {
		const ageMars = space.ageMars();
		expect(ageMars).toBeCloseTo(13.2978, 3);
	});

  test('should calculate age based on Venus equation', () => {
		const ageVenus = space.ageVenus();
		expect(ageVenus).toBeCloseTo(40.3225, 3);
	});

	test('should calculate age based on Mercury equation', () => {
		const ageMercury = space.ageMercury();
		expect(ageMercury).toBeCloseTo(104.1666, 3);
	});
	test(
		'should calculate how many years past median age they would live on a planet', () => {
      const ageDifference = (this.age < 80);
      expect(ageDifference).toEqual(this.age < 80);
	);
  
});