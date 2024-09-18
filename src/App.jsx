import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}> 
        </Route>
      </Routes>
    </Router>
  )
}

export default App
