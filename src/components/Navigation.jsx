import React from 'react';
import { Link } from 'react-router-dom';
import LocalContext from './LocalContext';

function Navigation() {
  return (
    <LocalContext.Consumer>
      {({ locale }) => (
        <nav className="navigation">
          <ul>
            <li><Link to="/archives">{locale === 'indo' ? 'arsip' : 'archive'}</Link></li>
          </ul>
        </nav>
      )}

    </LocalContext.Consumer>
  );
}

export default Navigation;
