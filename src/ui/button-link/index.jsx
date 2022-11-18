import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';

function ButtonLink({ children, style, ...props }) {

  const bem = withNaming({ e: '__', m: '_' })
  const cn = bem('Button-link');

  return (
    <Link className={cn(style ? { type: style } : null)} {...props}>{children}</Link>
  )
}

ButtonLink.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.string
}

export default React.memo(ButtonLink);