import './NavBar.css';
import logo from "../../img/logo512.png";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">

    <img src={logo} alt="Rainbow Target Icon" width="100px"/>

    <Link className="navbar-brand" to="/">Chakra Centre</Link>

    <button className="navbar-toggler nav-margin" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse justify-content-end nav-margin" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/quiz">Quiz</a>
        </li>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Chakras
          </span>
          <div className="dropdown-menu drop-down-mobile" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/root">Root</a>
          <a className="dropdown-item" href="/sacral">Sacral</a>
          <a className="dropdown-item" href="/solar-plexus">Solar Plexus</a>
          <a className="dropdown-item" href="/heart">Heart</a>
          <a className="dropdown-item" href="/throat">Throat</a> 
          <a className="dropdown-item" href="/third-eye">Third Eye</a>
          <a className="dropdown-item" href="/crown">Crown</a>
          <a className="dropdown-item" href="/all">All Chakras</a>
          <a className="dropdown-item" href="/resources">Resources</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;
