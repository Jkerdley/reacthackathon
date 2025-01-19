import React from 'react';
import NavBar from '../navigation/NavBar.jsx';
import { BreadCrumbs } from '../breadcrumbs/index.js';
import { Outlet } from 'react-router-dom';

export const Layout = () => {

	const breadcrumbs = [
		{ label: 'Главная', path: '/reacthackathon/' },
		{ label: 'Команда', path: '/reacthackathon/teammates' },
		{ label: 'Избранное', path: '/reacthackathon/favorite' },
	];
	return (
		<div className="flex flex-col bg-[#14141B] w-full h-auto items-start overflow-hidden">
			<NavBar />
			<BreadCrumbs breadcrumbs={breadcrumbs} />
			<div className="flex flex-col flex-[9] w-[100%] bg-[#14141B] items-center justify-between pr-4 pb-4 pl-4">
				<div className="flex flex-[12] w-full h-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
