import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TitleBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isClaimed: '✓ Claimed',
			categoryURL: '/category',
			starRating: 'https://i.imgur.com/joRV605.png'
		}
		this.setStars = this.setStars.bind(this);
	}

	setStars() {
		if (this.props.restaurantData.stars === 1) {
			this.setState({
				starRating: 'https://i.imgur.com/joRV605.png'
			});
		} else if (this.props.restaurantData.stars === 1.5) {
			this.setState({
				starRating: 'https://i.imgur.com/fqHSmyz.png'
			});
		} else if (this.props.restaurantData.stars === 2) {
			this.setState({
				starRating: 'https://i.imgur.com/GsBh9O5.png'
			});
		} else if (this.props.restaurantData.stars === 2.5) {
			this.setState({
				starRating: 'https://i.imgur.com/HHk4ca7.png'
			});
		} else if (this.props.restaurantData.stars === 3) {
			this.setState({
				starRating: 'https://i.imgur.com/eXa2t1X.png'
			});
		} else if (this.props.restaurantData.stars === 3.5) {
			this.setState({
				starRating: 'https://i.imgur.com/nDcH9au.png'
			});
		} else if (this.props.restaurantData.stars === 4) {
			this.setState({
				starRating: 'https://i.imgur.com/v2Ep8kQ.png'
			});
		} else if (this.props.restaurantData.stars === 4.5) {
			this.setState({
				starRating: 'https://i.imgur.com/e2b0NN4.png'
			});
		} else if (this.props.restaurantData.stars === 5) {
			this.setState({
				starRating: 'https://i.imgur.com/327Fh6y.png'
			});
		}
	}
	render() {
		this.setStars();
		const context = this;
		return (
			<div className='titleBar'>
				<div className='restaurant-titlebar-row1'>
					<span className='restaurant-titlebar-title'><h1>{this.props.restaurantData.name}</h1></span> <span className='restaurant-titlebar-is-claimed'>{this.state.isClaimed}</span>
				</div>
				<div className='restaurant-titlebar-rightrow1'>
					<a href="/review">Write a Review</a>
				</div>

				<div className='restaurant-titlebar-row2'>
					<span className='restaurant-titlebar-stars'><img src={this.state.starRating}></img></span>
					<span className='restaurant-titlebar-review-count'> {this.props.restaurantData.review_count} reviews </span>
				</div>
				<div className='restaurant-titlebar-rightrow2'>
					<span>
						<a href='/photo' className='restaurant-titlebar-rightrow-button'>Add a photo</a>
						<a href='/share' className='restaurant-titlebar-rightrow-button'>Share</a>
						<a href='/bookmark' className='restaurant-titlebar-rightrow-button'>Bookmark</a></span>
				</div>

				<div className='restaurant-titlebar-row3'>
					<span className='restaurant-titlebar-dollar-rating'>{this.props.restaurantData.dollarRating} &middot; </span>
					<span className='restaurant-titlebar-categories'>{this.props.restaurantData.categories.map(function (category, index) {
						return <span key={index}><a href="/category">{category}</a>, </span>
					})}</span>
				</div>


			</div>
		);
	}
}
export default TitleBar;