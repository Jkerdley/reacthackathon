import React from 'react';
import PropTypes from 'prop-types';

export const PageContainer = ({ children }) => {
	return (
		<div className="flex flex-[10] w-full h-full items-center justify-center bg-[#813177] rounded-2xl p-2 gap-2">
			{children}
		</div>
	);
};

PageContainer.propTypes = {
	children: PropTypes.node.isRequired
}
