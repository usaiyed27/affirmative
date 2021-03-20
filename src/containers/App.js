import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import AppTitle from '../components/AppTitle/AppTitle';
import AddAffirmatiion from '../components/AddAffirmation/AddAffirmation';
import DisplayAffirmation from '../components/DisplayAffirmation/DisplayAffirmation';
import ListAffirmation from '../components/ListAffirmation/ListAffirmation';
import './App.css';

class App extends Component {
	_isMounted = false;

	constructor() {
		super()
		this.state = {
			input: '',
			listAffirm: [
				'Hello',
			],
			displayAffirm: '',
			route: 'home',
			bgColor: ''
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

	onClickDelete = (index) => {
		const { listAffirm } = this.state;

		this.setState({
			listAffirm: listAffirm.filter((affirm, i) => {
				return i != index;
			})
		})
	}

	changeColor = () => {
		let index = 0;

		this.setState(state => {
			const bgColorsArray = ['#231F20', '#BB4430'];
			const bgColor = bgColorsArray[index];
			console.log(bgColor)
			index = (index + 1)%(bgColorsArray.length);
			return{
				bgColor
			}	
		})
	}	


   componentDidMount(){
   	  let index = 0;

   	  this.timer = setInterval(() => {
   	  	this.setState({ displayAffirm: this.state.listAffirm[index]});
   	  		index = (index + 1)%(this.state.listAffirm.length)
   	  		//console.log(index)
   	  	},5000)
   }

  	componentWillUnmount(){
  		clearInterval(this.timer);
  	}

	render(){
		const {displayAffirm, listAffirm,bgColor} = this.state;
		return (
		    <div className="App">
		      <Navigation onRouteChange = {this.onRouteChange}/>
		      <AppTitle />
		      { (this.state.route === 'home')
			    ?<AddAffirmatiion 
			      onRouteChange = {this.onRouteChange}
			      onInputSubmit = {this.onInputSubmit}
			      onInputChange = {this.onInputChange} 
			      changeColor = {this.changeColor}
			      />
			    :(this.state.route === 'list') 
			      ?<ListAffirmation 
			      onRouteChange = {this.onRouteChange} 
			      onClickDelete = {this.onClickDelete}
			      bgColor = {bgColor}
			      listAffirm = {listAffirm}
			      />
			      :<DisplayAffirmation 
			       onRouteChange = {this.onRouteChange} 
			       displayAffirm = {displayAffirm}
			       />
		      }
		    </div>
  		);
	}
}

export default App;
