import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pagine/Home';
import Deck from './pagine/Deck'
import Navbar from './componenti/Navbar';
import Footer from './componenti/Footer';
import Strategie from './pagine/Strategie';
import Error from './pagine/Error';


function App() {
  

  return (
    <div className='pagina'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/Deck' element={< Deck />}/>
          <Route path='/Strategie' element={< Strategie />}/>
          <Route path='/*' element={< Error />}/> 
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
