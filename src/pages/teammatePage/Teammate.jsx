import React from 'react';
import { Progress } from '../../components/progress';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';

export const Teammate = ({ flex, isBigCard, teammateId }) => {
	return (
		<>
			<TeammateCard flex={flex} isBigCard={isBigCard} teammateId={teammateId} />
		</>
	);
};
