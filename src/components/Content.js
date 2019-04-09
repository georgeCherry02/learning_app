import React from 'react';
import {Home} from './Home';

export class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  dest: "home"
		}
		this.goTo = this.goTo.bind(this);
	}

	goTo(dest) {
		this.setState({
		  dest: dest
		});
	}

	render() {
		switch(this.state.dest) {
			case "home":
				return <Home opt={this.goTo}/>;
			case "create":
				break;
			case "learn":
				break;
			default:
				this.setState({
				  dest: "home"
				});
		}
	}
}
