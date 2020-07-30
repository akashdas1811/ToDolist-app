import React from 'react';

function Header(){
   return (
       <header style={hdrStyle}>
          <h1>TodoList</h1>
       </header>
   );
}

const hdrStyle ={
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}

export default Header;