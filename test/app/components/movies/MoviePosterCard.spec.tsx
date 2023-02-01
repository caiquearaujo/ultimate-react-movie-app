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
					popularity: 100,
				}}
			/>
		);

		const title = screen.getByTestId('movie-poster-card-title');
		const poster = screen.getByTestId('movie-poster-card-poster');
		const pop = screen.getByTestId('movie-poster-card-popularity');

		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent('Movie Title');
		expect(poster).toBeInTheDocument();
		expect(poster).toHaveAttribute(
			'src',
			'https://image.tmdb.org/t/p/w500/movie_poster.jpg'
		);
		expect(pop).toBeInTheDocument();
		expect(pop).toHaveTextContent('100%');
	});
});
