import React from 'react';
import ReactDOM from 'react-dom';

class TitleBar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>{this.props.exampleData.title}</div>
		);
	}
}
export default TitleBar;