import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TitleBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isClaimed: '✓ Claimed',
			categoryURL: '/category'
		}
	}
	render() {
		if (!this.props.restaurantData.isClaimed) {
			this.setState = {
				isClaimed: 'x Not Claimed'
			}
		}
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
					<span className='restaurant-titlebar-stars'>{this.props.restaurantData.stars} Stars </span>
					<span className='restaurant-titlebar-review-count'>{this.props.restaurantData.review_count} reviews </span>
				</div>
				<div className='restaurant-titlebar-rightrow2'>
					<span>
						<a href='/photo' className='restaurant-titlebar-rightrow-button'>Add a photo</a>
					 	<a href='/share' className='restaurant-titlebar-rightrow-button'>Share</a>
						<a href='/bookmark' className='restaurant-titlebar-rightrow-button'>Bookmark</a></span>
				</div>

				<div className='restaurant-titlebar-row3'>
					<span className='restaurant-titlebar-dollar-rating'>{this.props.restaurantData.dollarRating} &middot; </span>
					<span className='restaurant-titlebar-categories'>{this.props.restaurantData.categories.map(function(category, index){
						return <span key={index}><a href="/category">{category}</a>, </span>
					})}</span>
				</div>

				
			</div>
		);
	}
}
export default TitleBar;