import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header, Placeholder } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import spotti6 from '../img/spotti6.png';
import './Persik.css';

import './Persik.css';
import './ButStyle.css';
import './block.css';
import './BacButtonDalee.css';
import './GradientTest.css';
import './ButtonSelectedOne.css';
import './form-radio.css';
import './BacButtonStyle.css';
import './bac.css';

import { FC, useEffect } from "react";
import bridge from '@vkontakte/vk-bridge';

const Panel7 = props => {

	useEffect(()=>{
	 bridge.send('VKWebAppJoinGroup', {group_id: 207723345})
	;
 }, []);

	return (

	<Panel className="PanelBackground" id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="panel6"/>}
		>

		</PanelHeader>

		<Group  header={<Header className="Panel7" mode="primary" ></Header>}>

			<Div >

			<Placeholder
				header="УРА! ТЕСТ ПРОЙДЕН!"
			>
			<img  className="Picha" src={spotti6} alt="Котперсик"/>

			</Placeholder>


							 <Button    id="btn1" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel8" >
			 				 УЗНАТЬ РЕЗУЛЬТАТЫ →
			 				</Button>







			</Div>

		</Group>

	</Panel>
);
}

Panel7.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Panel7;
