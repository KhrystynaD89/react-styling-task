import React, { useState } from 'react';

const App = () => {
  const [picture, setPicture] = useState('https://picsum.photos/200/300');

  const changePicture = () => {
    const newPicture = `https://picsum.photos/seed/${Math.random()}/200/300`;
    setPicture(newPicture);
  };
  //*styling
  const stylingDiv = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    minHeight: '100vh', 
    backgroundColor: '#F2F3F5' 
    
    
  }

  const stylingPic = {
    width: '400px', 
    height: '600px', 
    margin: '20px 0'
  }

  const stylingBut = {
    backgroundColor: 'cadetblue', 
    color: 'white', 
    padding: '15px 20px', 
    marginTop: '20px',
    border: 'none', 
    borderRadius: '7px', 
    cursor: 'pointer',
    fontSize: '1.3rem' 
  }

  //*styling

  return (
    <div style= {stylingDiv}>
       <h1 style={{ color: 'cadetblue', fontSize: '2rem' }}>Random Picture Generator</h1>
      <img src={picture} style={stylingPic}/>
      <button onClick={changePicture} style={stylingBut}>Change Picture</button>
    </div>
  );
};

export default App;