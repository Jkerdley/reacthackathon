import React from 'react';
import Logotype from '../../assets/icons/Logo.svg';
import { Link } from 'react-router-dom';
export const Logo = () => {
	return (
		<div name="logo-bar" className="flex items-center justify-center flex-[0.4] h-full py-1">
			<Link to={`/reacthackathon/`}>
				<img
					className="flex size-12 h-full hover:scale-110 transition-all ease-in-out"
					src={Logotype}
					alt="logo"
				/>
			</Link>
		</div>
	);
};
