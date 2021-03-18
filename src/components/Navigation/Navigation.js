import React from 'react';

function Navigation({onRouteChange}){
	return(
	<nav>
		<p onClick = {() => onRouteChange('home')}>Add Affirmation</p>
		<p onClick = {() => onRouteChange('list')}>List Affirmation</p>
		<p onClick = {() => onRouteChange('display')}>Display Affirmation</p>
	</nav>
	)
}

export default Navigation;