import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './../components/TitleBar.jsx'
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurantData: {
				business_id: '',
				name: '',
				isClaimed: true,
				stars: 0,
				review_count: 0,
				dollarRating: '',
				categories: [],
			},
			param: '',
			displayID: ''
		}
	}

	componentDidMount() {
		const context = this;
		const url = window.location.href.split('/').pop();
		
		axios.get('/title-bar/restaurant/'+url).then(function (response) {
			context.setState({
				restaurantData: response.data,
				param: response.data.business_id
			});
		}).catch(function (error) {
			console.log(error);
		})
		console.log('Here is a list of working restaurants: cTJjTKz2huGZ-ElScC2pSw, j37Z4LIXTH9j6KOq9aX8DQ, 1K4qrnfyzKzGgJPBEcJaNQ, NpozCEWra9PkYtxCtCPr6Q, KWdRUyN6H5NIOiP37I9psg, rp0bKQBtAR9XHeeR4CMCOA');
		console.log('Check database for more');
	}

	onChange(e) {
		this.setState({
			displayID: e.target.value
		});
	}
	onClick() {
		const context = this;
		var getURL = '/title-bar/restaurant/' + this.state.displayID;
		axios.get(getURL).then(function (response) {
			context.setState({
				restaurantData: response.data,
				param: response.data.business_id
			});
		}).catch(function (error) {
			console.log(error);
		})
	}
	render() {
		return (
			<div>
				<TitleBar restaurantData={this.state.restaurantData} />
				<input value={this.state.displayID} onChange={this.onChange.bind(this)} />
				<button onClick={this.onClick.bind(this)}>Find Restaurant By ID</button>
			</div>
		);
	}
}

export default App;