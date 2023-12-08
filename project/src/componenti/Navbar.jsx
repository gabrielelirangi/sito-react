// file di creazione navbar fissa per tutte le pagine del sito
import { Link } from "react-router-dom";
import logo from "./immagini/logo.jpg";
import sfondoNav from "./immagini/sfondoNav.jpg"
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav style={{backgroundImage: `url(${sfondoNav})`}}>
      <div className="wrapper">
        <div className="logo" style={{backgroundImage: `url(${logo})`}}></div>
        <div className="box-menu">
          <Link to="/" className="menu"> Home </Link>
          <Link to="/Deck" className="menu"> Deck </Link>
          <Link to="/Strategie"  className="menu"> Strategie </Link>
        </div>
      </div>
    </nav>
  );
}
