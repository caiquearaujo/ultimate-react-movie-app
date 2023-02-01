import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class AxiosFactory {
	static create(config: AxiosRequestConfig): AxiosInstance {
		return axios.create(config);
	}
}
