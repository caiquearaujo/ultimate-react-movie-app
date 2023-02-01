import 'react';
import { render, screen } from '@testing-library/react';
import MoviePosterCard from '@root/app/components/movies/MoviePosterCard';

describe('MoviePosterCard', () => {
	it('should display component', () => {
		render(
			<MoviePosterCard
				movie={{
					title: 'Movie Title',
					poster_path: '/movie_poster.jpg',
					popularity: 80,
				}}
			/>
		);

		const title = screen.getByTestId('movie-poster-card-title');
		const poster = screen.getByTestId('movie-poster-card-poster');
		const chart = screen.getByTestId('movie-score-chart');

		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent('Movie Title');
		expect(poster).toBeInTheDocument();
		expect(poster).toHaveAttribute(
			'src',
			'https://image.tmdb.org/t/p/w500/movie_poster.jpg'
		);
		expect(chart).toBeInTheDocument();
		expect(chart).toHaveAttribute('data-score', '80');
	});
});
