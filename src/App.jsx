import React, { useState } from 'react';
import './App.css';

function App() {
  // Set the initial background color to white
  const [bgColor, setBgColor] = useState('white');

  // Function to change the background color
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
      <h1>Background Color Changer</h1>
      <div>
        <button onClick={() => changeColor('red')}>Red</button>
        <button onClick={() => changeColor('green')}>Green</button>
        <button onClick={() => changeColor('blue')}>Blue</button>
        <button onClick={() => changeColor('yellow')}>Yellow</button>
        <button onClick={() => changeColor('purple')}>Purple</button>
      </div>
    </div>
  );
}

export default App;
