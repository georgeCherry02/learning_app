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
	render() {
		return (
		  <div style={style}>
		    <Button handleClick={this.props.opt} type={true}/>
		    <Button handleClick={this.props.opt} type={false}/>
		  </div>
		);
	}
}
