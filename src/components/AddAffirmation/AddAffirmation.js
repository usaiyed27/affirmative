import React from 'react';
import './AddAffirmation.css' 

function AddAffirmation({onInputChange,onInputSubmit,input, changeColor}){
	return(
	<div className = "container affirmation">
		<input type='text' placeholder= 'Add Your Affirmation' onChange = {onInputChange}/>
		<button 
		type='submit'
		onClick = {() => {onInputSubmit(input); changeColor();}}>
		Add Affirmation
		</button>
	</div>
	)
}

export default AddAffirmation;