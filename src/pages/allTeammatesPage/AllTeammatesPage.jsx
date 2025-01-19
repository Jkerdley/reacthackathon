import React from 'react';
import { Sidebar } from '../../components/sidebar';
import { PageContainer } from '../../components/pageContainer';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';

export const AllTeammatesPage = () => {
	return (
		<>
			<Sidebar />
			<PageContainer>
				<>
					<TeammateCard teammateId="1" flex={'flex-[3.5] hover:flex-[8] transition-all ease-out'} />
					<TeammateCard teammateId="2" flex={'flex-[2] hover:flex-[8] transition-all ease-out'} />
					<TeammateCard teammateId="3" flex={'flex-[2] hover:flex-[8] transition-all ease-out'} />
				</>
			</PageContainer>
		</>
	);
};
