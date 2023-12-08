import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="box-footer">
        <div className="social">
          <h2>Social</h2>
          <p> Instagram </p>
          <p> Facebook </p>
          <p> Twich </p>
          <p> You-Tube </p>
        </div>
        <div className="pagine">
          <h2>Pagine</h2>
          <ul>
            <li>
              <Link to="/" className="link-footer">
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/Deck" className="link-footer">
                Deck
              </Link>
            </li>
            <li>
              <Link to="/Strategie" className="link-footer">
                Strategie
              </Link>
            </li>
          </ul>
        </div>
        <div className="link">
          <ul>
            <li>
              <Link className="privacy"> Cookie Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <p>@Gabriele Lirangi 2023</p>
    </>
  );
}
