import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header, Placeholder } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import spotti4 from '../img/spotti4.png';
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
import './Picha.css';

const Panel5 = props => {

	return (

	<Panel className="PanelBackground" id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="panel4"/>}
		>

		</PanelHeader>

		<Group  header={<Header className="Panel5" mode="primary" ></Header>}>

			<Div >

			<Placeholder
				header="ПОЧЕСАТЬ ЗА УШКОМ?"
			>
			<img className="Picha"  src={spotti4} alt="Котперсик"/>
Выбери один из вариантов.
			</Placeholder>


							 <Button    id="btn1" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel6" >
			 				 ДААА!!
			 				</Button>


							<Button    id="btn2" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel6" >
							 Я САМОСТОЯТЕЛЬНЫЙ!
						 </Button>




			</Div>

		</Group>

	</Panel>
);
}

Panel5.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Panel5;
