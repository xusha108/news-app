import React from 'react';

const NavBar: React.FC = () => {
  return(
    <nav>
    <div className="nav-wrapper teal accent-4 px1">
      <a href="/" className="brand-logo">News API</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">get all news</a></li>
        <li><a href="/">news sourses</a></li>
        <li><a href="/">add news</a></li>
      </ul>
    </div>
  </nav>
  )
}


export default NavBar;

