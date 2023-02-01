import React from 'react';
import '@root/styles/global.scss';
import { ApiProvider } from '@root/app/contexts/ApiContext';

function App() {
	return (
		<ApiProvider>
			<h1>Hello, world!</h1>
		</ApiProvider>
	);
}

export default App;
