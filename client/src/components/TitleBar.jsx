import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

var exampleData = {
	id: 'abc123',
	rating: 4,
	reviewCount: 36,
	dollarRating: '$$',
	categories: ['breakfast','sandwich']
}

class TitleBar extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>TitleBar goes here</div>
		);
	}

	componentDidMount(){
		axios.post('/title-bar/restaurant', exampleData)
		.then(function(response){
			console.log('Post successful');
		}).catch(function(error){
			console.log(error);
		})
	}
}
export default TitleBar;