import React from 'react';
import { Sidebar } from '../../components/sidebar';
import { PageContainer } from '../../components/pageContainer';
import { Teammate } from '../teammatePage/Teammate';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';

export const TeamPage = () => {
	return (
		<>
			<Sidebar />

			<PageContainer>
				<>
					{/* <TeammateCard teammateId="1" flex={'flex-[3.5] hover:flex-[8] transition-all ease-out'} />
					<TeammateCard teammateId="2" flex={'flex-[2] hover:flex-[8] transition-all ease-out'} />
					<TeammateCard teammateId="3" flex={'flex-[2] hover:flex-[8] transition-all ease-out'} /> */}
				</>
				<Teammate isBigCard={true} teammateId="1" flex={'flex-[3.5]'} />
			</PageContainer>
		</>
	);
};
