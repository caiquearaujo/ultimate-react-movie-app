import 'react';
import { render, screen } from '@testing-library/react';
import MovieScoreChart from '@root/app/components/movies/MovieScoreChart';

describe('MovieScoreChart', () => {
	it('should display component', () => {
		render(<MovieScoreChart score={100} />);

		const container = screen.getByTestId('movie-score-chart');
		const track = screen.getByTestId('movie-score-chart-track');
		const bar = screen.getByTestId('movie-score-chart-bar');

		expect(container).toBeInTheDocument();
		expect(container).toHaveAttribute('data-score', '100');
		expect(track).toBeInTheDocument();
		expect(bar).toBeInTheDocument();
		expect(bar).toHaveAttribute('stroke-dasharray', '100, 100');
	});
});
