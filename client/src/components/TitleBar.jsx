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
				<div className='restaurant-row1'>
					<span className='restaurant-title'><h1>{this.props.restaurantData.name}</h1></span> <span className='restaurant-is-claimed'>{this.state.isClaimed}</span>
				</div>
				<div className='restaurant-rightrow1'>
					<a href="#">Write a Review</a>
				</div>

				<div className='restaurant-row2'>
					<span className='restaurant-stars'>{this.props.restaurantData.stars} Stars </span>
					<span className='restaurant-review-count'>{this.props.restaurantData.review_count} reviews </span>
				</div>

				<div className='restaurant-row3'>
					<span className='restaurant-dollar-rating'>{this.props.restaurantData.dollarRating} &middot; </span>
					<span className='restaurant-categories'>{this.props.restaurantData.categories.map(function(category){
						return <span><a href="#">{category}</a>, </span>
					})}</span>
				</div>

				
			</div>
		);
	}
}
//TitleBar.propTypes = { restaurantData: PropTypes.object };
export default TitleBar;