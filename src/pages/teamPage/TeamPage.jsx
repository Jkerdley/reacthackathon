import React from 'react';
import { Sidebar } from '../../components/sidebar';
import { PageContainer } from '../../components/pageContainer';
import { Teammate } from '../teammatePage/Teammate';
import { useParams } from 'react-router-dom';

export const TeamPage = () => {
	const { id } = useParams();
	return (
		<>
			<Sidebar />
			<PageContainer>
				<Teammate isBigCard={true} teammateId={id} flex={'flex-[3.5]'} />
			</PageContainer>
		</>
	);
};
