import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

const { PORT = '3000', HOST = '0.0.0.0' } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@root': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: parseInt(PORT, 10),
		host: HOST,
	},
});
