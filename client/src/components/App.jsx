import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './../components/TitleBar.jsx'
import axios from 'axios';


var exampleData = {
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
	}

	componentDidMount(){
		// axios.post('/title-bar/restaurant', exampleData)
		// .then(function(response){
		// 	console.log('Post successful');
		// }).catch(function(error){
		// 	console.log(error);
		// })
		axios.get('/title-bar/restaurant')
		.then(function(response){
			console.log('Post successful');
		}).catch(function(error){
			console.log(error);
		})
	}

	render(){
		return(
			<TitleBar exampleData={exampleData}/>
		);
	}
}
export default App;