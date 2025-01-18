import React from 'react';
import AvatarJo from '../../assets/images/avatarjo.jpg';

const TeamMateIcon = ({ size = 'size-16' }) => {
	return (
		<div className={`relative ${size} justify-center items-center rounded-full overflow-hidden`}>
			<img className="w-full h-full object-cover" src={AvatarJo} alt="avatar" />
		</div>
	);
};

export default TeamMateIcon;
