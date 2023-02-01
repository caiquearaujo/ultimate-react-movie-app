import React, { useCallback } from 'react';
import '@root/styles/global.scss';
import { ApiProvider, useApiContext } from '@root/app/contexts/ApiContext';
import MoviePostersSections from './app/sections/movies/MoviePostersSection';

function App() {
	const api = useApiContext();

	const popularMovies = useCallback(
		() => api.popularMovies({ page: 1 }),
		[api]
	);

	return (
		<ApiProvider>
			<h1>Hello, world!</h1>
			<MoviePostersSections
				callback={popularMovies}
				title="Popular Movies"
				subtitle="The most popular movies right now."
			/>
		</ApiProvider>
	);
}

export default App;
