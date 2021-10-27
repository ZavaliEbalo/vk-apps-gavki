import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const Panel3 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Котперсик
		</PanelHeader>

		<img className="Persik" src={persik} alt="Котперсик"/>

	</Panel>
);

Panel3.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Panel3;
