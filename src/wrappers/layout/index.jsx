import React from 'react';
import propTypes from 'prop-types';
import { cn as bem } from "@bem-react/classname";
import './style.css';

function Layout({ children }) {

  const cn = bem('Layout');

  return (
    <div className={cn()}>{children}</div>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired
}

export default React.memo(Layout)