import PropTypes from 'prop-types';

export const PROP_TYPE = {
	SLIDE: PropTypes.shape({
		imageUrl: PropTypes.string.isRequired,
		title: PropTypes.string,
	}),
};
