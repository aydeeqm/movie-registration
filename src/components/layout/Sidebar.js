import React from  'react';
import { Link } from 'react-router-dom';
import { sidebarLabels } from '~utils/constants';

const sidebarOptions = sidebarLabels.map(option => {
  return (
    <li key={option.id}>
      <Link to={option.route} className='subtitle is-5 has-text-link'>
        {option.label}
      </Link>
    </li>
  );
});

const Sidebar = () => (
  <aside className='sidebar-container has-background-white-ter'>
    <ul className='sidebar-options'>
      {sidebarOptions}
    </ul>
  </aside>
)

export default Sidebar;
