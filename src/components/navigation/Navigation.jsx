import React from 'react';
import { NavigationItem } from './NavigationItem';
import Favourites from '../../assets/icons/Heart.svg';
import Team from '../../assets/icons/Team.svg';
import Home from '../../assets/icons/HomeW.svg';

export const Navigation = () => {
	return (
		<div className="flex flex-[4] gap-4 justify-start items-center bg-[#14141B]">
			<NavigationItem icon={Home} navName={'Главная'} path={'/reacthackathon/'} />
			<NavigationItem icon={Team} navName={'Команда'} path={'/reacthackathon/commands'} />
			<NavigationItem icon={Favourites} navName={'Избранное'} path={'/reacthackathon/favorite'} />
		</div>
	);
};
