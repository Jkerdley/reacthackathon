import React from 'react';
import NavBar from '../navigation/NavBar.jsx';
import { BreadCrumbs } from '../breadcrumbs/index.js';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
	const location = useLocation();

	const breadcrumbs = () => {
		const pathnames = location.pathname.split('/').filter((x) => x);
		const paths = {
			reacthackathon: 'Главная',
			teammates: 'Команда',
			teammate: 'Teammate',
			favorite: 'Избранное',
		};

		return pathnames.map((path, index) => {
			const routePath = `/${pathnames.slice(0, index + 1).join('/')}`;
			return {
				label: paths[path] || path,
				path: routePath,
			};
		});
	};

	return (
		<div className="flex flex-col bg-[#14141B] w-full h-auto items-start overflow-hidden">
			<NavBar />
			<BreadCrumbs breadcrumbs={breadcrumbs()} />
			<div className="flex flex-col flex-[9] w-[100%] bg-[#14141B] items-center justify-between pr-4 pb-4 pl-4">
				<div className="flex flex-[12] w-full h-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
