import React from 'react';
import './Layout.scss';

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

export default Layout;
