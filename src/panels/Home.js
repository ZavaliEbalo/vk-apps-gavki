import { FC, useEffect } from "react";
import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';


import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import './TextHomeHeader.css';
import './TextHeaderGay.css';
import './PanelBackground.css';

const Home = ({ id, go }) => {

	useEffect(()=>{
	 bridge.send('VKWebAppJoinGroup', {group_id: 207723345})
	 .finally(()=> {
		 bridge.send('VKWebAppAllowMessagesFromGroup', {group_id: 207723345})
		 .finally(()=>{
			 bridge.send('VKWebAppJoinGroup', {group_id: 180578271});
		 });
	 });
 }, []);



return (
	<Panel className="PanelBackground" id={id}>

		<PanelHeader className="TextHeaderGay"  >УЗНАЙ КАКАЯ ТЫ СОБАКА</PanelHeader>

		<Group className="TextHomeHeader"  header={<Header mode="primary" subtitle="(бесплатно без смс и регистрации)">Пройди тест и узнай, какая ты собака прямо сейчас!</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					ПРОЙТИ ТЕСТ 🢫
				</Button>
			</Div>
		</Group>

	</Panel>

);



}



Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};



export default Home;
