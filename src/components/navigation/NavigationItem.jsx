import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavigationItem.css';

export const NavigationItem = ({ icon, navName, path }) => {
	const location = useLocation();
	const isActive = location.pathname === path;
	console.log(location.pathname);
	return (
		<Link
			to={path}
			className={`flex justify-start items-center gap-2 text-white ${isActive ? 'active' : ''}`}
		>
			<img className="flex size-5 justify-center items-center ml-8" src={icon} alt="main-page" />
			{navName}
		</Link>
	);
};

NavigationItem.propTypes = {
	icon: PropTypes.object.isRequired,
	navName: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
};
