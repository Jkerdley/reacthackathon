import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout } from './components/content/index.js';
import { TeamPage } from './pages/teamPage/index.js';

export const Routing = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={'reacthackathon'} element={<TeamPage />} />
			</Route>
		</Routes>
	);
};
