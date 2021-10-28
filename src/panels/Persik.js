import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';
import './ButStyle.css';
import './block.css';

const Persik = props => (
	<Div className="PanelBackground">
	<Panel
	id={props.id}>
		<PanelHeader
		//	left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>

		</PanelHeader>

		<img className="Persik"  src={persik} alt="Котперсик"/>
		<Group  header={<Header className="Persik" mode="primary">КАКАЯ ТЫ ГАВКА?</Header>}>
			<Div >
				<Button   className="block"  mode="secondary" onClick={props.go} data-to="panel3">
					НЕБОЛЬШАЯ
				</Button>
				<Button  className="block"  mode="secondary" onClick={props.go} data-to="panel3">
					НЕМАЛЕНЬКАЯ
				</Button>
				<Button   className="Persik" mode="secondary" onClick={props.go} data-to="panel3">
					Далее
				</Button>
			</Div>
		</Group>
	</Panel>
	</Div>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
