import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {


  const [tasks, setTasks] = useState([
    { task: "Walk Dog", completed: false },
    { task: "Play Rocket League", completed: true }
  ]);

  const addToTasks = (newTask) => { setTasks([...tasks, newTask]) }

  const completeTask = (index) => {
    const newComplete = tasks.map((value, idx) =>
      idx != index ? value : { ...value, completed: !value.completed }
    )
    console.log(newComplete);
    setTasks(newComplete);
  }

  const removeFromTasks = (index) => {
    const newTasks = tasks.filter((value, idx) => index != idx);
    console.log(newTasks);
    setTasks(newTasks);
  }


  return (
    <>
      <Form addToTasks={addToTasks} />
      <Display
        completeTask={completeTask}
        tasks={tasks}
        removeFromTasks={removeFromTasks}
      />
    </>
  )
}

export default App
