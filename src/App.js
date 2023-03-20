import React, { useState } from 'react';
import './App.css'



import MyModel from './MyModel';

function App() {
    const [color, setColor] = useState("")
    const [colorLine, setColorLine] = useState("")

    const colors = ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934']
  return (
    <>
    <div className='pick-line'>
      <h3>Pick your line</h3>
    {colors.map((color) => (
        <div className="circle-line" key={color} style={{background: color}}  onClick={() => setColorLine(color)}/>
      ))}
    </div>

    <div className="color-options">
      {colors.map((color) => (
        <div className="circle" key={color} style={{background: color}}  onClick={() => setColor(color)}/>
      ))}
    </div>

    
    <div className="model">
    <MyModel color={color} colorLine={colorLine}/>
    </div>

    </>


  );
}

export default App;
