import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header, Placeholder } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import spotti2 from '../img/spotti2.png';
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

const Panel3 = props => {

	return (

	<Panel className="PanelBackground" id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="persik"/>}
		>

		</PanelHeader>

		<Group  header={<Header className="Panel3" mode="primary" ></Header>}>

			<Div >

			<Placeholder
				header="ТЫ ХОРОШИЙ МАЛЬЧИК?"
			>
			<img className="Persik"  src={spotti2} alt="Котперсик"/>
Выбери вариант, который больше всего тебе соответствует.
			</Placeholder>


							 <Button    id="btn1" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel4" >
			 					Я ТЯН!
			 				</Button>


							<Button    id="btn2" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel4" >
							 ДА, МОЯ ГОСПОЖА
						 </Button>




			</Div>

		</Group>

	</Panel>
);
}

Panel3.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Panel3;
