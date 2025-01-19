import React from 'react';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';
import PropTypes from 'prop-types';

export const Teammate = ({ flex, isBigCard, teammateId }) => {
	return (
		<>
			<TeammateCard flex={flex} isBigCard={isBigCard} teammateId={teammateId} />
		</>
	);
};

Teammate.propTypes = {
	flex: PropTypes.string,
	teammateId: PropTypes.string,
	isBigCard: PropTypes.bool,
};
