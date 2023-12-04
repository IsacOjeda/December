import './App.css'
import PersonCard from './components/PersonCardComponent'

function App() {

  return (
    <>
      <PersonCard firstname ="Jane" lastname="Doe" fixage ={45}  haircolor="Black" ></PersonCard>
      <PersonCard firstname="Joe" lastname="Smith"fixage={88}haircolor="Brown"></PersonCard>
      <PersonCard firstname="Millard" lastname="Fillmore"fixage={50}haircolor="Brown"></PersonCard>
      <PersonCard firstname="Maria" lastname="Smith"fixage={50}haircolor="Brown"></PersonCard>
    </>
  )
}

export default App
