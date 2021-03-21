import React from 'react';
import './DisplayAffirmation.css'

function DisplayAffirmation({displayAffirm}){
	return(
		<div className = 'container display-affirmation'>
			<article className='center mw5 mw6-ns hidden ba mv4'>
			<h1 className="">Affirmations to change mindset</h1>
		  		<div className="">
		    		<p 
		    		className="f6 f5-ns lh-copy measure mv0" 
		    		id = 'affirmations'>
		     			{displayAffirm}
		    		</p>
		  		</div>
		  	</article>	
		</div>

	)
}

export default DisplayAffirmation;