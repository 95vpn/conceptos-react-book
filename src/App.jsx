import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import MyList from './components/MyList'
import { NewItemForm } from './components/NewItemForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <h1>Vite + React</h1>
      {/* <NewItemForm/> */}
      <MyList/>
    </>
  )
}

export default App
