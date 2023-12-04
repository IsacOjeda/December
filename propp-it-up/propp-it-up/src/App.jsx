import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCardComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonCard firstname="Jane" lastname="Doe" age="45" haircolor="Black" ></PersonCard>
      <PersonCard firstname="Joe" lastname="Smith"age="88"haircolor="Brown"></PersonCard>
      <PersonCard firstname="Millard" lastname="Fillmore"age="50"haircolor="Brown"></PersonCard>
      <PersonCard firstname="Maria" lastname="Smith"age="50"haircolor="Brown"></PersonCard>
    </>
  )
}

export default App
