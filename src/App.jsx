import React from 'react';
import { Progress } from './components';

function App() {
	return (
		<div className="w-[200px] h-[100px]">
			<Progress percent={75} title={'Frontend'} color="green" type="line" />
			<Progress percent={35} title={'Backend'} color="blue" type="circle" />
		</div>
	);
}
export default App;
