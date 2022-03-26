import { FC, useEffect } from "react";
import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import './BacButtonStyle.css';


import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Placeholder } from '@vkontakte/vkui';

import './TextHomeHeader.css';
import './TextHeaderGay.css';
import './PanelBackground.css';
import './bac.css';
import spotti8 from '../img/spotti8.png';

const Home = ({ id, go }) => {





return (
	<Panel className="PanelBackground" id={id}>

		<PanelHeader >КАКАЯ ТЫ СОБАКА?</PanelHeader>

		<Group     header={<Header mode="primary" ></Header>}>
			<Div>

			<Placeholder
				header="Пройди тест и узнай, какая ты собака  ПРЯМО СЕЙЧАС!"
			>
			<img className="Picha"  src={spotti8} alt="Котперсик"/>
(бесплатно без смс и регистрации)
			</Placeholder>

				<Button className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={go} data-to="persik">
					ПРОЙТИ ТЕСТ →
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
