import React from 'react';
import {NavBar} from './components/NavBar';
import {Content} from './components/Content';

class App extends React.Component {
	render() {
		return (
		  <div>
		    <NavBar />	
		    <Content />
		  </div>
		);
	}
}

export default App;
