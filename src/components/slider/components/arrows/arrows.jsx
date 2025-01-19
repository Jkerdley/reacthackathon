import { React } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';

export const Arrows = ({ changeSlide }) => {
	return (
		<div className="flex justify-between items-center h-full w-full absolute z-10 px-2">
			<div className="backdrop-opacity-20 backdrop-invert p-2 rounded-full">
				<img
					className="h-[20px] w-[20px] hover:cursor-pointer"
					src={leftArrow}
					onClick={() => changeSlide(-1)}
				/>
			</div>
			<div className="backdrop-opacity-20 backdrop-invert p-2 rounded-full">
				<img
					className="h-[20px] w-[20px] hover:cursor-pointer"
					src={rightArrow}
					onClick={() => changeSlide(1)}
				/>
			</div>
		</div>
	);
};

Arrows.propTypes = {
	changeSlide: PropTypes.func,
};
