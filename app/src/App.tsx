import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { amountAdded, incremented } from './features/Counter/counter'
import { useAppDispatch, useAppSelector } from './app/hooks'
import './App.css'
import Counter from './components/Counter'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented())
  }

  const secondHandleClick = () => {
    dispatch(amountAdded(3))
  }

  return (
    <div className="app">
      <div className="title"><h1>Redux Tutorial</h1></div>
      <Counter></Counter>
    </div>

    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <h4>Increment by 1</h4>
    //     <h3>{count}</h3>
    //     <button onClick={handleClick}>
    //       increment
    //     </button>
    //     <hr />
    //     <h4>Increment by 3</h4>
    //     <h3>{count}</h3>
    //     <button onClick={secondHandleClick}>
    //       increment
    //     </button>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
