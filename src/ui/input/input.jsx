import React from 'react';
import propTypes from 'prop-types';
import './style.css';
import { useCallback } from 'react';
import throttle from 'lodash.throttle';
import { useState } from 'react';
import { useEffect } from 'react';

function Input(props) {

  return (
    <input className='Field' {...props} {...props.register} />
  )
}

Input.propTypes = {
  register: propTypes.object
}

export default React.memo(Input);