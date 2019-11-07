import React from 'react';
import Header from '../header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className='layout-wrapper'>
      <Sidebar />
      <section>
        { children }
      </section>
    </div>
  </div>
)

export default Layout;
