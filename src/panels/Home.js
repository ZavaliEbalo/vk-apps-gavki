import React from 'react';
import PropTypes from 'prop-types';


import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import './TextHomeHeader.css';

const Home = ({ id, go }) => (

	<Panel id={id}>

		<PanelHeader className="TextHomeHeader" >УЗНАЙ КАКАЯ ТЫ СОБАКА</PanelHeader>

		<Group header={<Header mode="secondary">Пройди тест и узнай, какая ты собака прямой сейчас</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					ПРОЙТИ ТЕСТ
				</Button>
			</Div>
		</Group>

	</Panel>

);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
