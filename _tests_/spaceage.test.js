import { TestScheduler } from 'jest';
import AgeCalculator from '../src/spaceage.js';

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
		'should calculate how many years past median age they would live on Jupiter', () => {
      const ageDifferenceJupiter = space.ageDifferenceJupiter();
      expect(ageDifferenceJupiter).toBeCloseTo(-4.637);
		});
	test(
		'should calculate how many years past median age they would live on Mars', () => {
			const ageDifferenceMars = space.ageDifferenceMars();
			expect(ageDifferenceMars).toBeCloseTo(-29.255);
		});
	test(
		'should calculate how many years past median age they would live on Venus', () => {
			const ageDifferenceVenus = space.ageDifferenceVenus();
			expect(ageDifferenceVenus).toBeCloseTo(-88.709);
		});
	test(
		'should calculate how many years past median age they would live on Mercury', () => {
			const ageDifferenceMercury = space.ageDifferenceMercury();
			expect(ageDifferenceMercury).toBeCloseTo(-229.166);
		});
  
});