import React from 'react';

export const NavigationItem = ({ icon, navName }) => {
	return (
		<div name="navbar-link" className="flex justify-start items-center gap-2">
			<img className="flex size-5 justify-center items-center ml-8" src={icon} alt="main-page" />
			{navName}
		</div>
	);
};
