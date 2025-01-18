import React from 'react';
import { Progress } from './components';
import { BreadCrumbs } from './components/breadcrumbs';
import NavBar from './components/navigation/NavBar';
import { ContentContainer } from './components/content/ContentContainer';

function App() {
	return (
    <div name="main-container" className="flex flex-col bg-[#14141B] w-[100%] h-auto items-start">
			<NavBar />
			<BreadCrumbs />
			<ContentContainer>
    <div className="w-[200px] h-[100px]">
			<Progress percent={75} title={'Frontend'} color="green" type="line" />
			<Progress percent={35} title={'Backend'} color="blue" type="circle" />
 main
		</div>
    </ContentContainer>
    </div>
		
	);
}
export default App;
