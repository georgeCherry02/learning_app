import React from 'react';
import {Button} from './Button';

const style = {
  position: 'absolute',
  top: 50,
  width: '100%',
  height: '100%',
  textAlign: 'center',
  background: '#ccc'
}

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.create = this.create.bind(this);
		this.learn = this.learn.bind(this);
	}

	create() {
		alert('Create!');
	}
	learn() {
		alert('Learn!');
	}

	render() {
		return (
		  <div style={style}>
		    <Button handleClick={this.learn} msg={"Learn!"}/>
		    <Button handleClick={this.create} msg={"Create!"}/>
		  </div>
		);
	}
}
