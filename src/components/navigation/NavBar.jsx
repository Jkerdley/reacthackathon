import React from 'react';
import { Navigation } from './Navigation';
import { Logo } from './Logo';

const NavBar = () => {
	return (
		<div
			name="header-container"
			className="flex flex-[1] w-[100%] h-20 justify-start  border-b-[2px] border-b-gray-700/90"
		>
			<Logo />
			<Navigation />
		</div>
	);
};

export default NavBar;
