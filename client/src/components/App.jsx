import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './../components/TitleBar.jsx'
import axios from 'axios';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurantData: {
				business_id: '',
				name: '',
				isClaimed: true,
				stars: 1,
				review_count: 0,
				categories: [],
			},
			dollarRating: '$$$',
			categories: ["Casual", "Dine-In"],
			param: '',
			displayID: '',
			starRating: 'https://i.imgur.com/joRV605.png'
		}
		this.setStars = this.setStars.bind(this)
	}


	setStars() {
		if (this.state.restaurantData.stars === 1) {
			this.setState({
				starRating: 'https://i.imgur.com/joRV605.png'
			});
		} else if (this.state.restaurantData.stars === 1.5) {
			this.setState({
				starRating: 'https://i.imgur.com/fqHSmyz.png'
			});
		} else if (this.state.restaurantData.stars === 2) {
			this.setState({
				starRating: 'https://i.imgur.com/GsBh9O5.png'
			});
		} else if (this.state.restaurantData.stars === 2.5) {
			this.setState({
				starRating: 'https://i.imgur.com/HHk4ca7.png'
			});
		} else if (this.state.restaurantData.stars === 3) {
			this.setState({
				starRating: 'https://i.imgur.com/eXa2t1X.png'
			});
		} else if (this.state.restaurantData.stars === 3.5) {
			this.setState({
				starRating: 'https://i.imgur.com/nDcH9au.png'
			});
		} else if (this.state.restaurantData.stars === 4) {
			this.setState({
				starRating: 'https://i.imgur.com/v2Ep8kQ.png'
			});
		} else if (this.state.restaurantData.stars === 4.5) {
			this.setState({
				starRating: 'https://i.imgur.com/e2b0NN4.png'
			});
		} else if (this.state.restaurantData.stars === 5) {
			this.setState({
				starRating: 'https://i.imgur.com/327Fh6y.png'
			});
		}
	}

	componentDidMount() {
	var url = window.location.href.split('/').pop();
	url = url.split('?');
	if (url.length > 1) {
		var urlParams = url[1].split('&');
		urlParams = urlParams.reduce((acc, param) => {
			param = param.split('=');
			acc[param[0]] = param[1];
			return acc;
		}, {id: url[0]});
	}

	$.ajax({
		url: `title-bar/restaurant/${url[0]}`,
		type: 'GET',
		success: (data) => {
			console.log('GET restaurant! success!', data);
			this.setState({restaurantData:data[0]})
			this.setStars()
		},
		error: (data) => {
			console.log('GET restaurant failed!', data[0])
		}
	});
}

	render() {
		return (
			<div>
				<TitleBar starRating={this.state.starRating} dollarRating={this.state.dollarRating} categories={this.state.categories} restaurantData={this.state.restaurantData} />
			</div>
		);
	}
}

export default App;
