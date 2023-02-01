import Api from '@root/api';
import AxiosFactory from '@root/api/AxiosFactory';
import React, { createContext, useContext } from 'react';

const axios = AxiosFactory.create({
	baseURL: 'http://192.168.0.11:8080/api',
});

const ApiContext = createContext<Api>(new Api(axios));

function ApiProvider({ children }: React.PropsWithChildren) {
	const api = new Api(axios);

	return (
		<ApiContext.Provider value={api}>{children}</ApiContext.Provider>
	);
}

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
export default ApiContext;
