import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Button, Group,  Div, Header, Gradient } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';
import './ButStyle.css';
import './block.css';
import './BacButtonDalee.css';
import './GradientTest.css';
import './ButtonSelectedOne.css';
import './form-radio.css';




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
			<div class='e-btn-group' data-toggle="buttons">
	             <input  type="radio" id="checkbold" name="font" value="bold"/>
	             <label className="ButtonSelectedOne" class="e-btn" for="checkbold">НЕБОЛЬШАЯ •</label>
	             <input  type="radio" id="checkitalic" name="font" value="italic" />
	             <label className="ButtonSelectedOne" class="e-btn" for="checkitalic">НЕМАЛЕНЬКАЯ ●</label>
	             <input  type="radio" id="checkline" name="font" value="underline"/>
	             <label className="ButtonSelectedOne" class="e-btn" for="checkline">ГАВ-ГАВ</label>
	         </div>
				<Button    disabled className="BacButtonDalee" mode="secondary" onClick={props.go} data-to="panel3">
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
