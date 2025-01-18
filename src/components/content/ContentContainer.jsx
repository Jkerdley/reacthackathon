import React from 'react';
import { TeamPage } from '../../pages/teamPage/TeamPage';
import { MainPage } from '../../pages/mainPage';
import { FavouritesPage } from '../../pages/favouritesPage/FavouritesPage';

export const ContentContainer = () => {
	return (
		<div
			name="content-container"
			className="flex flex-col flex-[9] w-[100%] bg-[#14141B] items-center justify-between pr-4 pb-4"
		>
			<div name="content" className="flex flex-[12] w-full h-full">
				<TeamPage />
				{/* <MainPage /> */}
				{/* <FavouritesPage /> */}
			</div>
		</div>
	);
};
