import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './../components/TitleBar.jsx'

class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<TitleBar />
		);
	}
}
export default App;