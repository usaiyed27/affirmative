import React from 'react';

function DisplayAffirmation({displayAffirm}){
	return(
		<div className = 'container display-affirmation'>
			<article className="center w-80 br3 hidden ba b--black-10 mv4">
		  		<h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Affirmations to change mindset</h1>
		  		<div className="pa3 bt b--black-10">
		    		<p 
		    		className="f6 f5-ns lh-copy" 
		    		id = 'affirmations' 
		    		style = {{'textTransform':'uppercase', 'fontWeight':'bold', 'color':'#231F20'}}>
		     			{displayAffirm}
		    		</p>
		  		</div>
				</article>
		</div>

	)
}

export default DisplayAffirmation;