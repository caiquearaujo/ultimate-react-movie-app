import React from 'react';
import utils from '@root/global/utils';
import module from './MovieScoreChart.module.scss';

export type MovieScoreChartProps = {
	score: number;
};

const MovieScoreChart: React.FC<MovieScoreChartProps> = ({ score }) => {
	const [intStore, track, bar] = utils.solveScore(score);

	return (
		<div
			className={module.container}
			data-testid="movie-score-chart"
			data-score={intStore}>
			<svg viewBox="0 0 36 36" className={module.chart}>
				<path
					data-testid="movie-score-chart-track"
					fill="none"
					stroke={track}
					strokeWidth={2}
					d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
				<path
					data-testid="movie-score-chart-bar"
					className={module.bar}
					fill="none"
					stroke={bar}
					strokeWidth={2}
					strokeDasharray={`${intStore}, 100`}
					d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
			</svg>
		</div>
	);
};

export default MovieScoreChart;
