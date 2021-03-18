import React from 'react';

function DisplayAffirmation({displayAffirm}){
	return(
		<div className = 'display-affirmation'>
			<h2>Affirmations to change mindset</h2>
			<p id = 'affirmations'>{displayAffirm}</p>
		</div>
	)
}

export default DisplayAffirmation;