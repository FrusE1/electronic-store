import React from 'react';
import propTypes from 'prop-types';
import './style.css';

function Input(props) {

  return (
    <input className='Field' {...props} {...props.register} />
  )
}

Input.propTypes = {
  register: propTypes.object
}

export default React.memo(Input);