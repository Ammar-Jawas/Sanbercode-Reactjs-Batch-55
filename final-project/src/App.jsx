import './App.css'
import Details from './components/Details'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="job/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
