import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation'
import AddAffirmatiion from '../components/AddAffirmation/AddAffirmation';
import DisplayAffirmation from '../components/DisplayAffirmation/DisplayAffirmation';
import ListAffirmation from '../components/ListAffirmation/ListAffirmation';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			input: '',
			listAffirm: [
				'Hello',
				'Your Affirmations'
			],
			displayAffirm: '',
			route: 'home'
		}
	}

	onInputChange = (event) => {
		this.setState({
			input:event.target.value	
		})
	}
	onInputSubmit = () => {
		this.setState(state => {
			 const listAffirm = state.listAffirm.concat(state.input);
 
      		return {
       		 listAffirm,
        	 input: '',
     		 };
		});
	}

	onRouteChange = (route) => {
		if(route === 'display'){
			this.setState({route:'display'})
		}else if(route === 'list'){
			this.setState({route:'list'})
		}else{
			this.setState({route:route})
		}
	}

    // showAffirmation = () => {
    // 	for(let i = 0; i< this.state.listAffirm.length; i++){
    // 		return this.state.listAffirm[i];
    // 	}
    // }

	render(){
		const {listAffirm} = this.state;
		return (
		    <div className="App">
		      <Navigation onRouteChange = {this.onRouteChange}/>
		      { (this.state.route === 'home')
			    ?<AddAffirmatiion 
			      onRouteChange = {this.onRouteChange}
			      onInputSubmit = {this.onInputSubmit}
			      onInputChange = {this.onInputChange} 
			      />
			    :(this.state.route === 'list') 
			      ?<ListAffirmation 
			      onRouteChange = {this.onRouteChange} 
			      listAffirm = {listAffirm}
			      />
			      :<DisplayAffirmation 
			       onRouteChange = {this.onRouteChange} 
			       listAffirm = {listAffirm}
			       />
		      }
		    </div>
  		);
	}
}

export default App;
