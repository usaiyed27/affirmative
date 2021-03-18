import React from 'react';

function DisplayAffirmation({listAffirm}){
	return(
		<div className = 'display-affirmation'>
			<h2>Affirmations to change mindset</h2>
			<ul>	
				{listAffirm.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default DisplayAffirmation;