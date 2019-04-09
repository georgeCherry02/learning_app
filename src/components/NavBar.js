import React from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  height: 49,
  lineHeight: '49px',
  background: '#ddd',
  borderBottom: '1px solid #ccc'
}

const hStyle = {
  marginLeft: 20
}

export class NavBar extends React.Component {
	render() {
		return (
		  <div style={style}>
		    <h1 style={hStyle}>Welcome</h1>
		  </div>
		);
	}
}
