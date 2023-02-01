import utils from '@root/global/utils';

describe('Utils', () => {
	it.each([
		{ score: 100, array: [100, '#204529', '#21d07a'] },
		{ score: 76, array: [76, '#204529', '#21d07a'] },
		{ score: 75, array: [75, '#423d0f', '#d2d531'] },
		{ score: 51, array: [51, '#423d0f', '#d2d531'] },
		{ score: 50, array: [50, '#4d2c0f', '#d2a631'] },
		{ score: 26, array: [26, '#4d2c0f', '#d2a631'] },
		{ score: 25, array: [25, '#4d0f0f', '#d23131'] },
		{ score: 0, array: [0, '#4d0f0f', '#d23131'] },
	])('score as $score should return $array', ({ score, array }) => {
		expect(utils.solveScore(score)).toStrictEqual(array);
	});
});
