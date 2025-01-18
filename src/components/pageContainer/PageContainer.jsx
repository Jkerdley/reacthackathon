import React from 'react';
import PropTypes from 'prop-types';

export const PageContainer = ({ children }) => {
	return (
		<div className="flex flex-wrap flex-[10] w-full h-full items-center justify-center bg-[#33394D]/35 rounded-2xl p-3 gap-3">
			{children}
		</div>
	);
};

PageContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
