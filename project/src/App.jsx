import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pagine/Home';
import Navbar from './componenti/Navbar';

function App() {
  

  return (
    <div className='pagina'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={< Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
