import React from 'react';
import { Movie } from '@root/api/types';
import module from './MoviePosterScroller.module.scss';
import MoviePosterCard from './MoviePosterCard';
import UnloadedMoviePosterCard from './UnloadedMoviePosterCard';

export type MoviePosterScrollerProps = {
	loading?: boolean;
	movies: Pick<
		Movie,
		'id' | 'title' | 'poster_path' | 'popularity' | 'vote_average'
	>[];
};

function MoviePosterScroller(props: MoviePosterScrollerProps) {
	const { movies, loading = false } = props;

	if (loading) {
		const unloaded: JSX.Element[] = [];

		for (let i = 0; i < 20; i += 1) {
			unloaded.push(
				<div key={i} className={module.child}>
					<UnloadedMoviePosterCard />
				</div>
			);
		}

		return (
			<div className={module.wrapper}>
				<div className={module.container}>
					<div className={module.scroller}>{unloaded}</div>
				</div>
			</div>
		);
	}

	return (
		<div className={module.wrapper}>
			<div className={module.container}>
				<div className={module.scroller}>
					{movies.map(movie => (
						<div key={movie.id} className={module.child}>
							<MoviePosterCard movie={movie} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default MoviePosterScroller;
