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

});