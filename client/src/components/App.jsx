import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './../components/TitleBar.jsx'
import axios from 'axios';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			restaurantData : {
				business_id: '',
				name: '',
				isClaimed: true,
				stars: 0,
				review_count: 0,
				dollarRating: '',
				categories: [],
			}
		}
	}

	componentDidMount(){
		const context = this;
		console.log('component mounted');
		axios.get('/title-bar/restaurant/').then(function(response){
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