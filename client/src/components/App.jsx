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
		var url = window.location.href.split('/').pop();
		(url.length > 0) ? url : url = '1K4qrnfyzKzGgJPBEcJaNQ'; 	// If no id specified, use this as default
		axios.get('/title-bar/restaurant/' + url).then(function (response) {
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
			</div>
		);
	}
}

export default App;