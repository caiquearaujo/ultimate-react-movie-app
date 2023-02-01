import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Movie, PaginatedContent } from '@root/api/types';
import MoviePosterScroller from '@root/app/components/movies/MoviePosterScroller';
import utils from '@root/global/utils';
import module from './MoviePosterSection.module.scss';

export type MoviePostersSectionProps = {
	callback: () => Promise<AxiosResponse<PaginatedContent<Movie>>>;
	title: string;
	subtitle: string;
};

const MoviePostersSections: React.FC<MoviePostersSectionProps> = ({
	callback,
	title,
	subtitle,
}) => {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		callback().then(async _movies => {
			await utils.sleep(2000);
			setMovies(_movies.data.results);
			setLoading(false);
		});
	}, [callback]);

	return (
		<section className="wrapper wrapper-scrolling">
			<header>
				<h2 className={module.title}>{title}</h2>
				<p className={module.subtitle}>{subtitle}</p>
			</header>
			<MoviePosterScroller loading={loading} movies={movies} />
		</section>
	);
};

export default MoviePostersSections;
