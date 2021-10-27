import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const Persik = props => (
	<Panel
	style={{ justifyContent: "center" }}
	id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Котперсик
		</PanelHeader>

		<img className="Persik" src={persik} alt="Котперсик"/>
		<Group header={<Header mode="primary">КАКАЯ ТЫ ГАВКА?</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={props.go} data-to="panel3">
					НЕБОЛЬШАЯ
				</Button>
			</Div>
		</Group>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;