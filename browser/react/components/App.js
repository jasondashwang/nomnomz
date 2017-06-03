import React from 'react';
import { Link } from 'react-router-dom';

export default function App ({ match }) {
  return (
    <div id="wrapper">

      <header id="header">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
          <div className="inner">
            <h1>Nomnomz</h1>
            <p>Advancing the food industry</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><Link to={`/product`}>Product</Link></li>
            <li><Link to={`/team`}>Team</Link></li>
            <li><Link to={`/contact`}>Contact</Link></li>
            {
              // <li><Link href="#elements">Elements</Link></li>
            }
          </ul>
        </nav>
      </header>

      <div id="main">

      </div>

      <footer id="footer">
        <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
      </footer>

    </div>
  );
}

