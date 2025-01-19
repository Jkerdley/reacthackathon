import PropTypes from 'prop-types';
import React from 'react';

export const Slide = ({ imageUrl, title = '', url }) => {
	console.log('imageUrl', imageUrl);

	return (
		<div className="flex-[1_0_100%] relative">
			<img src={imageUrl} alt={title} className="flex mt-auto mx-auto w-full h-full object-contain" />
			<span className="absolute left-1/2 -translate-x-1/2 bottom-4 backdrop-opacity-40 backdrop-invert px-2 rounded-md">
				{url ? (
					<a href={url} className="text-white hover:underline cursor-pointer">
						{title}
					</a>
				) : (
					title
				)}
			</span>
		</div>
	);
};

Slide.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string,
	url: PropTypes.string,
};
