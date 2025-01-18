import React from 'react';
import AvatarJo from '../../assets/images/avatarjo.jpg';

const TeamMateIcon = () => {
	return (
		<div className="relative size-16 justify-center items-center rounded-full overflow-hidden">
			<img className="w-full h-full object-cover" src={AvatarJo} alt="avatar" />
		</div>
	);
};

export default TeamMateIcon;
