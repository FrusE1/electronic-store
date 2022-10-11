import React from 'react';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import '../style.css';

function ButtonRed({ children, ...props }) {

  const bem = withNaming({ e: '__', m: '_' })
  const cn = bem('Button');

  return (
    <button className={cn({ type: 'red' })} {...props}>{children}</button>
  )
}

ButtonRed.propTypes = {
  children: propTypes.node.isRequired,
  props: propTypes.object
}

export default React.memo(ButtonRed);