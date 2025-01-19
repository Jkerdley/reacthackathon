import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavigationItem = ({ icon, navName, path }) => {
	return (
		<NavLink to={path} className="flex justify-start items-center gap-2">
			<img className="flex size-5 justify-center items-center ml-8" src={icon} alt="main-page" />
			{navName}
		</NavLink>
	);
};

NavigationItem.propTypes = {
	icon: PropTypes.string.isRequired,
	navName: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired
}
