import React from 'react';

const style = {
  display: 'inline-block',
  margin: 20,
  width: 500,
  height: 300,
  lineHeight: '300px',
  borderRadius: 30,
  border: '1px solid #ddd'
};

const hStyle = {
  margin: 0
}

export class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  highlight: false
		}
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter() {
		this.setState({
		  highlight: true
		});
	}
	handleMouseLeave() {
		this.setState({
		  highlight: false 
		});
	}

	render() {
		var backgroundCol = {
		  background: this.state.highlight ? '#ddd' : '#eee'
		}
		var nStyle = {...style, ...backgroundCol};
		return <div 
			onMouseEnter={this.handleMouseEnter}
			onMouseLeave={this.handleMouseLeave}
			onClick={this.props.handleClick}
			style={nStyle}><h1 style={hStyle}>
			{this.props.msg}
		       </h1></div>;
	}
}
