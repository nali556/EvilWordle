import './App.css';
import React from 'react'
import Board from './components/Board';
import Keyboard from './components/Keyboard';

export default function App() {
  return (
    <div className='game'>
    <nav className='text-center mt-3 title'>Evil Wordle</nav>
      <Board/>
      <Keyboard/>
    </div>
    
  )
}
