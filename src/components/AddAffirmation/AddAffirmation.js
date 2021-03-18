import React from 'react';
import './AddAffirmation.css' 

function AddAffirmation({onInputChange,onInputSubmit,input}){
	return(
	<div className = "affirmation">
		<input type='text' placeholder= 'Add Your Affirmation' onChange = {onInputChange}/>
		<button 
		type='submit'
		onClick = {() => onInputSubmit(input)}>
		Add Affirmation
		</button>
	</div>
	)
}

export default AddAffirmation;