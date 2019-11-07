import React from  'react';
import { Link } from 'react-router-dom';

const sidebarOptions = [1, 2, 3, 4, 5, 6].map(option => {
  return (
    <li key={option}>
      <Link to={'/'} key={option}>
        local
      </Link>
    </li>
  );
});

const Sidebar = () => (
  <aside className='sidebar-container'>
    <ul className='sidebar-options'>
      {sidebarOptions}
    </ul>
  </aside>
)

export default Sidebar;
