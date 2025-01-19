import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Arrows, SlidesList } from './components';
import { getSlides } from './utils';

export const Slider = ({ width = '100%', height = '100%' }) => {
	const slides = getSlides();
	const [slideIndex, setSlideIndex] = useState(0);

	const changeSlide = (step = 1) => {
		let slideNumber = 0;

		if (slideIndex + step < 0) {
			slideNumber = slides.length - 1;
			// slideNumber = 0;
		} else if (slideIndex + step === slides.length) {
			slideNumber = 0;
			// slideNumber = slides.length - 1;
		} else {
			slideNumber = slideIndex + step;
		}
		setSlideIndex(slideNumber);
	};

	return (
		<div className="overflow-hidden relative rounded-3xl" style={{ width, height }}>
			<Arrows changeSlide={changeSlide} />
			<SlidesList slides={slides} slideIndex={slideIndex} />
		</div>
	);
};

Slider.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
};
