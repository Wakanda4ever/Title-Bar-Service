import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './../components/TitleBar.jsx'
import axios from 'axios';


const exampleData = {
	id: 'abc123',
	title: 'Breakfast Club',
	rating: 4,
	reviewCount: 36,
	dollarRating: '$$',
	categories: ['breakfast','sandwich']
}

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			restaurantData : {
				id: 'abc123',
				title: 'Breakfast Club',
				rating: 4,
				reviewCount: 36,
				dollarRating: '$$',
				categories: ['breakfast','sandwich']
			}
		}
	}

	componentDidMount(){
		const context = this;
		console.log('component mounted');
		axios.get('/title-bar/restaurant').then(function(response){
			console.log('Post successful'); 
			console.log('here is data' + JSON.stringify(response));
			context.setState({
				restaurantData: response.data
			});
			console.log('state is now ' + JSON.stringify(context.state.restaurantData));
		  }).catch(function(error){
			console.log(error);
		  })
	}

	render(){
		console.log(this.state.restaurantData);
		return(
			<TitleBar restaurantData={this.state.restaurantData}  />
		);
	}
}
export default App;