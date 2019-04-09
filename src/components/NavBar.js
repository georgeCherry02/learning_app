import React from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  height: 49,
  lineHeight: '49px',
  background: '#ccc',
  borderBottom: '1px solid #eee'
}

const hStyle = {
  margin: 0,
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
