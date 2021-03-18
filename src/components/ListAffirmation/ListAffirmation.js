import React from 'react';

function ListAffirmation({listAffirm}){
	return(
		<div className = 'list-affirmation'>
			<h2>Your Affirmations</h2>
			{listAffirm}
		</div>
	)
}

export default ListAffirmation;