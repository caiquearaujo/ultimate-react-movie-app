import 'react';
import { render, screen } from '@testing-library/react';
import MoviePosterScroller from '@root/app/components/movies/MoviePosterScroller';

describe('MoviePosterScroller', () => {
	it('should display component', () => {
		const movies = [
			{
				id: 1,
				title: 'Movie Title',
				poster_path: '/movie_poster_1.jpg',
				popularity: 100,
			},
			{
				id: 2,
				title: 'Movie Title',
				poster_path: '/movie_poster_2.jpg',
				popularity: 50,
			},
		];

		render(<MoviePosterScroller movies={movies} />);

		const elements = screen.getAllByTestId('movie-poster-card-comp');
		expect(elements).toHaveLength(2);
	});
});
