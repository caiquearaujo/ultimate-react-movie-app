import React from 'react';
import { Movie } from '@root/api/types';
import module from './MoviePosterCard.module.scss';

export type MoviePosterProps = {
	movie: Pick<Movie, 'title' | 'poster_path' | 'popularity'>;
};

function MoviePosterCard(props: MoviePosterProps) {
	const { movie } = props;

	return (
		<div data-testid="movie-poster-card-comp" className={module.card}>
			<div className={`${module.row} ${module.poster}`}>
				<img
					data-testid="movie-poster-card-poster"
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				/>
			</div>
			<div className={`${module.row} content`}>
				<h3
					data-testid="movie-poster-card-title"
					className={module.title}>
					{movie.title}
				</h3>
				<p
					data-testid="movie-poster-card-popularity"
					className={module.popularity}>
					{Math.floor(movie.popularity)}%
				</p>
			</div>
		</div>
	);
}

export default MoviePosterCard;
