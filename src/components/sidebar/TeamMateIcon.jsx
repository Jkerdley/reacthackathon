import React from 'react';
import { getUserById } from '../../utils/userUtils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TeamMateIcon = ({
	size = 'size-16',
	height,
	rotate,
	rounded = 'rounded-full',
	teammate,
	inSidebar,
	isBigCard,
}) => {
	const user = getUserById(teammate);

	if (!user) {
		return <div>Пользователь не найден</div>;
	}

	return isBigCard ? (
		<div
			className={`relative ${size} ${height} ${rotate} justify-center items-center ${rounded} overflow-hidden ${inSidebar ? 'mr-4' : ''}`}
		>
			<img className="w-full h-full object-cover" src={user.avatar} alt="avatar" />
		</div>
	) : (
		<Link to={`/reacthackathon/teammate/${user.id}`}>
			<button
				className={`relative ${size} ${height} ${rotate} justify-center items-center ${rounded} hover:scale-110 transition-all overflow-hidden ${inSidebar ? 'mr-4' : ''}`}
			>
				<img className="w-full h-full object-cover" src={user.avatar} alt="avatar" />
			</button>
		</Link>
	);
};

TeamMateIcon.propTypes = {
	size: PropTypes.string,
	height: PropTypes.string,
	rotate: PropTypes.string,
	teammate: PropTypes.string,
	rounded: PropTypes.string,
	inSidebar: PropTypes.bool,
	isBigCard: PropTypes.bool,
};
