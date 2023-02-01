import { AxiosInstance } from 'axios';
import { Movie, PaginatedContent } from './types';

export default class Api {
	protected axios: AxiosInstance;

	constructor(axios: AxiosInstance) {
		this.axios = axios;
	}

	public popularMovies(options: {
		page?: number;
		language?: string;
		region?: string;
	}) {
		return this.axios.get<PaginatedContent<Movie>>('/movie/popular', {
			params: options,
		});
	}
}
