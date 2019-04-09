import React from 'react';
import {Home} from './Home';
import {Learn} from './Learn';
import {Create} from './Create';

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
				return <Learn />;
			case "learn":
				return <Create />;
			default:
				this.setState({
				  dest: "home"
				});
		}
	}
}
