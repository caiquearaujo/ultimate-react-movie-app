import React from 'react';
import '@root/styles/global.scss';
import { ApiProvider } from '@root/app/contexts/ApiContext';
import MoviePosterScroller from './app/components/movies/MoviePosterScroller';

function App() {
	const movies = [
		{
			id: 1,
			title: 'Movie 1',
			poster_path:
				'https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
			popularity: 58,
		},
		{
			id: 2,
			title: 'Movie 2',
			poster_path:
				'https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
			popularity: 36,
		},
	];

	return (
		<ApiProvider>
			<h1>Hello, world!</h1>
			<MoviePosterScroller movies={movies} />
		</ApiProvider>
	);
}

export default App;
