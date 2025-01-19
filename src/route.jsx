import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout } from './components/layout/index.js';
import { TeamPage } from './pages/teamPage/index.js';
import { FavouritesPage } from './pages/favouritesPage/FavouritesPage.jsx';
import { MainPage } from './pages/mainPage/index.js';

export const Routing = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={'reacthackathon'} element={<MainPage />} />
				<Route path={'reacthackathon/commands'} element={<TeamPage />} />
				<Route path={'reacthackathon/favorite'} element={<FavouritesPage />} />
			</Route>
		</Routes>
	);
};
