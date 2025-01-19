import React from 'react';
import NavBar from '../navigation/NavBar.jsx';
import { BreadCrumbs } from '../breadcrumbs/index.js';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<div
			className="flex flex-col bg-[#14141B] w-full h-auto items-start overflow-hidden"
		>
			<NavBar />
			<BreadCrumbs />
			<div
				className="flex flex-col flex-[9] w-[100%] bg-[#14141B] items-center justify-between pr-4 pb-4"
			>
				<div className="flex flex-[12] w-full h-full">
					{/*<TeamPage></TeamPage>*/}
					{/* <MainPage /> */}
					{/* <FavouritesPage /> */}
					<Outlet />
				</div>
			</div>
		</div>
	);
};
