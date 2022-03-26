import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header, Gradient, Placeholder, Separator } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import spotti from '../img/spotti.png';
import './Persik.css';
import './ButStyle.css';
import './block.css';
import './BacButtonDalee.css';
import './GradientTest.css';
import './ButtonSelectedOne.css';
import './form-radio.css';
import './BacButtonStyle.css';
import './bac.css';





const Persik   = props => {




return (


	<Panel className="PanelBackground"
	id={props.id}>
		<PanelHeader

		>
		</PanelHeader>




		<Group  header={<Header className="Persik" mode="primary" ></Header>}>

			<Div >

			<Placeholder
				header="КАКАЯ ТЫ СОБАКА?"
			>
			<img className="Persik"  src={spotti} alt="Котперсик"/>
Выбери вариант, который больше всего тебе соответствует.
			</Placeholder>


							 <Button    id="btn1" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel3" >
			 					НЕБОЛЬШАЯ
			 				</Button>


							<Button    id="btn2" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel3" >
							 НЕМАЛЕНЬКАЯ
						 </Button>
						 <Button    id="btn3" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel3" >
							КРОШКА-КАРТОШКА
						</Button>
						<Button    id="btn4" className="BacButtonStyle" stretched size="l"  mode="secondary" onClick={props.go} data-to="panel3" >
						 НЕ БУДУ ОБЪЯСНЯТЬ СВОЮ МАЛЕНЬКОСТЬ!
					 </Button>



			</Div>

		</Group>


	</Panel>

);


}







Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};






export default Persik;
