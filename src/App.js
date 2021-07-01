import React from 'react'
import './App.css';
import { useState } from 'react';

const App = () => {
  const [display,setDisplay] = useState('');
  return (
    <div className='mainBody'>
      <div className='myContainer'>
        <div className='row inputRow'>
          
          <input type='text' 
          className='col-12 display' value={display}
          onChange={(event) => setDisplay(event.target.value)}
          onKeyDown={(event) => event.preventDefault()}
          />
        </div>
        <div className='row signRow'>
          <div className='col left' onClick={()=>setDisplay(display+'1')}>
            1
          </div>
          <div className='col mid' onClick={()=>setDisplay(display+'2')}>
            2
          </div>
          <div className='col mid' onClick={()=>setDisplay(display+'3')}>
            3
          </div>
          <div className='col operator sign ' onClick={()=>setDisplay(display+'/')}>
            /
          </div>
        </div>
        <div className='row signRow'>
          <div className='col left' onClick={()=>setDisplay(display+'4')}>
            4
          </div>
          <div className='col mid' onClick={()=>setDisplay(display+'5')} >
            5
          </div>
          <div className='col mid' onClick={()=>setDisplay(display+'6')}>
            6
          </div>
          <div className='col operator sign' onClick={()=>setDisplay(display+'*')}>
            *
          </div>
        </div>
        <div className='row signRow'>
          <div className='col left' onClick={()=>setDisplay(display+'7')}>
            7
          </div>
          <div className='col mid' onClick={()=>setDisplay(display+'8')}>
            8
          </div>
          <div className='col mid' onClick={()=>setDisplay(display+'9')}>
            9
          </div>
          <div className='col operator sign' onClick={()=>setDisplay(display+'+')}>
            +
          </div>
        </div>
        <div className='row signRow'>
          <div className='col left' onClick={()=>setDisplay(display+'.')}>
            .
          </div>
          <div className='col mid' onClick={()=>setDisplay(display+'0')}>
            0
          </div>
          <div className='col mid'>
            =
          </div>
          <div className='col operator sign' onClick={()=>setDisplay(display+'-')}>
            -
          </div>
        </div>
        <div className='row clear'>
          <div className='col clear' onClick={()=>setDisplay('')}>
            Clear All
          </div>
        </div>
      </div>  
    </div>
  )
}

export default App
