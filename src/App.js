import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useState } from 'react'
import data from './dataMock.js'

function App() {
  const [tasks, setTasks] = useState(data)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </BrowserRouter>
  )
}

export default App
