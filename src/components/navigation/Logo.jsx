import React from 'react';
import Logotype from '../../assets/icons/Logo.svg';
export const Logo = () => {
	return (
		<div name="logo-bar" className="flex items-center justify-center flex-[0.4] h-full py-1">
			<img className="flex size-14 h-full" src={Logotype} alt="logo" />
		</div>
	);
};
