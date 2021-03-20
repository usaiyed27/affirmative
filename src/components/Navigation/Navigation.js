import React from 'react';
import './Navigation.css';

function Navigation({onRouteChange}){
	return(
	<nav>
		<p id='AppTitle' onClick = {() => onRouteChange('home')}>
		<span>Affimative</span>
		</p>
		<p onClick = {() => onRouteChange('home')}>Add Affirmation</p>
		<p onClick = {() => onRouteChange('list')}>List Affirmation</p>
		<p onClick = {() => onRouteChange('display')}>Display Affirmation</p>
	</nav>
	)
}

export default Navigation;