import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TitleBar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>{this.props.restaurantData.name}</div>
		);
	}
}
TitleBar.propTypes = {restaurantData: PropTypes.object};
export default TitleBar;