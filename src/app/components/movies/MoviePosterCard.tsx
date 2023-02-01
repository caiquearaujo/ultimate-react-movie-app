import React from 'react';
import { Movie } from '@root/api/types';
import module from './MoviePosterCard.module.scss';
import MovieScoreChart from './MovieScoreChart';

export type MoviePosterProps = {
	movie: Pick<
		Movie,
		'title' | 'poster_path' | 'popularity' | 'vote_average'
	>;
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
				<div className={module.score}>
					<MovieScoreChart score={movie.vote_average * 10} />
				</div>
			</div>
			<div className={`${module.row} content`}>
				<h3
					data-testid="movie-poster-card-title"
					className={module.title}>
					{movie.title}
				</h3>
			</div>
		</div>
	);
}

export default MoviePosterCard;
