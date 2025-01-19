import { React } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPE } from '../../constants';
import { Slide } from '../slide/slide';

export const SlidesList = ({ slides = [], slideIndex = 0 }) => {
	return (
		<div
			className="flex w-full h-full transition ease-in-out"
			style={{
				transform: `translateX(-${slideIndex * 100}%)`,
			}}
		>
			{slides.map(({ imageUrl, title }, index) => (
				<Slide key={index} imageUrl={imageUrl} title={title} />
			))}
		</div>
	);
};

SlidesList.propTypes = {
	slides: PropTypes.arrayOf(PROP_TYPE.SLIDE),
	slideIndex: PropTypes.number,
};
