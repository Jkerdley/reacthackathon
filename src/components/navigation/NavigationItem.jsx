import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavigationItem.css';

export const NavigationItem = ({ icon, navName, path }) => {
	const location = useLocation();
	const isActive = location.pathname === path;

	return (
		<Link
			to={path}
			className={`flex justify-start items-center gap-2 hover:scale-110 hover:text-sky-200 transition-all ease-in-out text-white ${isActive ? 'text-sky-500' : ''}`}
		>
			<img className={`flex size-5 justify-center items-center ml-8`} src={icon} alt="main-page" />
			{navName}
		</Link>
	);
};

NavigationItem.propTypes = {
	icon: PropTypes.string.isRequired,
	navName: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
};
