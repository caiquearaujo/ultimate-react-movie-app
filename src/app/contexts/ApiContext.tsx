import Api from '@root/api';
import AxiosFactory from '@root/api/AxiosFactory';
import React, { createContext, useContext } from 'react';

const ApiContext = createContext<Api | null>(null);

function ApiProvider({ children }: React.PropsWithChildren) {
	const axios = AxiosFactory.create({
		baseURL: 'http://192.168.0.11/api',
	});

	const api = new Api(axios);

	return (
		<ApiContext.Provider value={api}>{children}</ApiContext.Provider>
	);
}

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
export default ApiContext;
