import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from './views/Main';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}> </Route>
      </Routes>

    </>
  )
}

export default App
