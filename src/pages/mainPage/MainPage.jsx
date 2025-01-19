import React from 'react';
import { PageContainer } from '../../components/pageContainer';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';
import { Offer } from '../../components/offer/offer';

export const MainPage = () => {
	return (
		<>
			<PageContainer>
				<div className="flex flex-[9] pl-2">
					<Offer />
				</div>
				<div className="flex transition-all duration-300 ease-in-out"></div>
				<>
					<TeammateCard
						teammateId="1"
						flex={'flex-[4.5] transition-all duration-300 ease-in-out'}
					/>
					<TeammateCard
						teammateId="2"
						flex={'flex-[4.5] transition-all duration-300 ease-in-out'}
					/>
					<TeammateCard
						teammateId="3"
						flex={'flex-[4.5] transition-all duration-300 ease-in-out'}
					/>
				</>
			</PageContainer>
		</>
	);
};
