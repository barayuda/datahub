import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function CustomLink({ label, to }) {
  let match = useRouteMatch({
    path: to
  });
  return (<li className={`nav-item${match ? ' active' : ''}`}>
    <Link className='nav-link' to={to}>{label}</Link>
  </li>);
}

function SideBar() {
  let match = useRouteMatch();
  return (<div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <CustomLink label='Page 1' to={`${match.url}/page-1`} />
          <CustomLink label='Page 2' to={`${match.url}/page-2`} />
        </ul>
      </div>
    </nav>
  </div>);
}

export {
  SideBar
};