import { React } from 'react';
import AvatarJo from '../../../../assets/images/avatarjo.jpg';

export const TeamFan = () => {
	return (
		<div className="relative w-full h-full">
			<a href="#">
				<img
					className="absolute top-1/2 left-1/2 transform -translate-x-[160px] -translate-y-[90px] w-[160px] h-[210px] object-cover overflow-hidden rounded-3xl -rotate-12"
					src={AvatarJo}
				/>
			</a>
			<a href="#">
				<img
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[210px] object-cover overflow-hidden rounded-3xl"
					src={AvatarJo}
				/>
			</a>
			<a href="#">
				<img
					className="absolute top-1/2 left-1/2 transform -translate-x-[0px] -translate-y-[90px] w-[160px] h-[210px] object-cover overflow-hidden rounded-3xl rotate-12"
					src={AvatarJo}
				/>
			</a>
		</div>
	);
};
