import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Panel3 from './panels/Panel3';
import Panel4 from './panels/Panel4';
import Panel5 from './panels/Panel5';
import Panel6 from './panels/Panel6';
import Panel7 from './panels/Panel7';
import Panel8 from './panels/Panel8';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');


	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);

	};



	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel}>
					<Home id='home' go={go}  />
					<Persik id='persik' go={go} />
					<Panel3 id='panel3' go={go} />
					<Panel4 id='panel4' go={go} />
					<Panel5 id='panel5' go={go} />
					<Panel6 id='panel6' go={go} />
					<Panel7 id='panel7' go={go} />
					<Panel8 id='panel8' go={go} />

				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
