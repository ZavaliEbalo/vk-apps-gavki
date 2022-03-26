import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header, Placeholder } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import spotti3 from '../img/spotti3.png';
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

const Panel4 = props => {
	

	return (

	<Panel className="PanelBackground" id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="panel3"/>}
		>

		</PanelHeader>

		<Group  header={<Header className="Panel4" mode="primary" ></Header>}>

			<Div >

			<Placeholder
				header="КАК ЧАСТО ТЫ ХОЧЕШЬ КУШАТЬ?"
			>
			<img className="Persik"  src={spotti3} alt="Котперсик"/>
Выбери вариант, который больше всего тебе соответствует.
			</Placeholder>


							 <Button    id="btn1" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel5" >
			 					ЛЮБЛЮ ХОРОШЕНЬКО
			 				</Button>


							<Button    id="btn2" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel5" >
							 ПО МАЛЕНЬОЧКУ
						 </Button>

						 <Button    id="btn2" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel5" >
							ЕМ 12 РАЗ В ДЕНЬ
						</Button>

						<Button    id="btn2" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel5" >
						 ЕМ ХЛЕБНЫЕ КОРОЧКИ
					 </Button>




			</Div>

		</Group>

	</Panel>
);
}

Panel4.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Panel4;
