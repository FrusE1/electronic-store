import React from 'react';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';

function Button({ children, style, ...props }) {

  const bem = withNaming({ e: '__', m: '_' })
  const cn = bem('Button');

  return (
    <button className={cn(style ? { type: style } : null)} {...props}>{children}</button>
  )
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.string
}

export default React.memo(Button);