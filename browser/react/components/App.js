import React from 'react';
import { Link } from 'react-router-dom';
import ContactContainer from '../containers/ContactContainer';

export default function App () {
  return (
    <div id="wrapper">

      <header id="header">
        <div className="logo">
          <span className="icon fa-tablet"></span>
        </div>
        <div className="content">
          <div className="inner">
            <h1>Nomnomz</h1>
            <p>Advancing the food industry</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#product">Product</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
            {
              // <li><Link href="#elements">Elements</Link></li>
            }
          </ul>
        </nav>
      </header>

      <div id="main">
        <article id="product">
          <h2 className="major">Product</h2>
          <span className="image main"><img src="images/banner.jpg" alt="" /></span>
          <h3>Approach</h3>
          <p>We apply the scientific method to the food industry. Some call us systemic, but data and technology drive our business. The aim is to modernize the food industry through digitizing its operations and management from top to bottom. We provide and implement a simple yet robust order management system to refine an outdated industry method.</p>

          <h3>Impact</h3>
          <p>We use technology to help create value for real people: Businesses can detect and eliminate deficiencies, significantly raising revenue. Customers enjoy a basic yet streamlined ordering experience. Small businesses and institutions are just some of the people who can ultimately benefit from our work.</p>
        </article>

        <article id="team">
          <h2 className="major">Team</h2>
          {
            // <span className="image main"><img src="images/girl.png" alt="" /></span>
            // <p>Jason Wang | CTO </p>
          }

        </article>

        <ContactContainer />
      </div>

      <footer id="footer">
        <p className="copyright">&copy; Nomnomz. Design: Jason Wang.</p>
      </footer>

    </div>
  );
}

