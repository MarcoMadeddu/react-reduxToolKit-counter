import { useState } from 'react'

import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <div className="title"><h1>Redux Tutorial</h1></div>
      <div className="app">
        <Counter />
        <Counter />

      </div>
    </>



  )
}

export default App
