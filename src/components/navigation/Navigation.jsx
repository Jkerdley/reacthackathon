import React from 'react';
import { NavigationItem } from './NavigationItem';
import Favourites from '../../assets/icons/Heart.svg';
import Team from '../../assets/icons/Team.svg';
import Home from '../../assets/icons/HomeW.svg';

export const Navigation = () => {
	return (
		<div name="navigation-bar" className="flex flex-[4] gap-4 justify-start items-center bg-[#14141B]">
			<NavigationItem icon={Home} navName={'Главная'} />
			<NavigationItem icon={Team} navName={'Команда'} />
			<NavigationItem icon={Favourites} navName={'Избранное'} />
		</div>
	);
};
