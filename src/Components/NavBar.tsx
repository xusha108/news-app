import React from 'react';

const NavBar: React.FC = () => {
  return(
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper teal darken-2 px1">
          <a href="/" className="brand-logo">News App</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">GET ALL NEWS</a></li>
         </ul>
      </div>
    </nav>
  </div>
  )
}


export default NavBar;

