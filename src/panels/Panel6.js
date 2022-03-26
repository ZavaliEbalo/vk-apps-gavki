import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header, Placeholder } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import spotti5 from '../img/spotti5.png';
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

const Panel6 = props => {

	return (

	<Panel className="PanelBackground" id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="panel5"/>}
		>

		</PanelHeader>

		<Group  header={<Header className="Panel6" mode="primary" ></Header>}>

			<Div >

			<Placeholder
				header="ПОНРАВИЛСЯ ТЕСТ?"
			>
			<img className="Persik"  src={spotti5} alt="Котперсик"/>
Выбери один из вариантов.
			</Placeholder>


							 <Button    id="btn1" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel7" >
			 				 СПАСИБО СПАСИБО СПАСИБОЧКИ!
			 				</Button>


							<Button    id="btn2" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel7" >
							 ОЧЕНЬ ПОНРАВИЛСЯ
						 </Button>

						 <Button    id="btn1" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel7" >
						 БЛАГОДАРЮ ЗА ТАКОЙ ПОДРОБНЫЙ ТЕСТ
						</Button>







			</Div>

		</Group>

	</Panel>
);
}

Panel6.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Panel6;
