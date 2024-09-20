import Home from './pages/Home'
import Gallery from './pages/Gallery'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="gallery" element={<Gallery />}/>
      </Routes>
    </Router>
  )
}

export default App
