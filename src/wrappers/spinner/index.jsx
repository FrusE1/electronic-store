import React from 'react';
import propTypes from 'prop-types';
import './style.css';

function Spinner({ children, waiting }) {

  if (waiting) {
    return <div className='Spinner'>{children}</div>
  } else {
    return children
  }
}

Spinner.propTypes = {
  children: propTypes.node.isRequired,
  waiting: propTypes.bool.isRequired
}

export default React.memo(Spinner);