import React from 'react';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';

function Layout({ children }) {

  const bem = withNaming({ e: '__' })
  const cn = bem('Layout');

  return (
    <div className={cn()}>{children}</div>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired
}

export default React.memo(Layout)