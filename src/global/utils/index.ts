const solveScore = (_score: number): [number, string, string] => {
	const score = Math.round(_score);

	if (score > 75) {
		return [score, '#204529', '#21d07a'];
	}

	if (score > 50) {
		return [score, '#423d0f', '#d2d531'];
	}

	if (score > 25) {
		return [score, '#4d2c0f', '#d2a631'];
	}

	return [score, '#4d0f0f', '#d23131'];
};

export default { solveScore };
