import React from 'react';
import { Movie } from '@root/api/types';
import module from './MoviePosterScroller.module.scss';
import MoviePosterCard from './MoviePosterCard';

export type MoviePosterScrollerProps = {
	movies: Pick<Movie, 'id' | 'title' | 'poster_path' | 'popularity'>[];
};

function MoviePosterScroller(props: MoviePosterScrollerProps) {
	const { movies } = props;

	return (
		<div className={module.scroller}>
			{movies.map(movie => (
				<MoviePosterCard
					className={module.child}
					key={movie.id}
					movie={movie}
				/>
			))}
		</div>
	);
}

export default MoviePosterScroller;
