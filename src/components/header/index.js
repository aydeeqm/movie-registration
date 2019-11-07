import React from 'react';

const Header = () => (
  <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="#!">
        Evaluacion
      </a>
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-light">
            Admin
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Header;
