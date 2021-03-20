import React from 'react';
import './DisplayAffirmation.css'

function DisplayAffirmation({displayAffirm}){
	return(
		<div className = 'container display-affirmation'>
			<h1 className="">Affirmations to change mindset</h1>
		  		<div className="">
		    		<p 
		    		className="" 
		    		id = 'affirmations'>
		     			{displayAffirm}
		    		</p>
		  		</div>
		</div>

	)
}

export default DisplayAffirmation;