import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pagine/Home';
import Navbar from './componenti/Navbar';
import Footer from './componenti/Footer';

function App() {
  

  return (
    <div className='pagina'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={< Home/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
