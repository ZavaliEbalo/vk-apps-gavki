import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header, Placeholder } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import spotti7 from '../img/spotti7.png';
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

const Panel8 = props => {

	return (

	<Panel className="PanelBackground" id={props.id}>
		<PanelHeader

		>

		</PanelHeader>

		<Group  header={<Header className="Panel8" mode="primary" ></Header>}>

			<Div >

			<Placeholder
			header = "Ты самая умная,  цветущая, к поцелуям зовущая, ангельски-прекрасная, но огнеопасная – взоры нежно-страстные, речи сладострастные, улыбка лучезарная, — в общем, сексуальная, стильная, шикарная, очень популярная, аристократичная, чертовски артистичная, крутая, элегантная, блестящая, приятная, неподражаемая и милая ГАВКА!"

			>
			<img className="Panel8"  src={spotti7} alt="Котперсик"/>

			<Button    id="btn2" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel7" >
			 ПОДЕЛИТЬСЯ В ИСТОРИИ
		 </Button>


			</Placeholder>









			</Div>

		</Group>

	</Panel>
);
}

Panel8.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Panel8;
