import React from 'react';
import {NavBar} from './components/NavBar';
import {Home} from './components/Home';

class App extends React.Component {
	render() {
		return (
		  <div>
		    <NavBar />	
		    <Home />
		  </div>
		);
	}
}

export default App;
