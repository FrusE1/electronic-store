import React from 'react';
import propTypes from 'prop-types';
import './style.css';
import { useCallback } from 'react';
import throttle from 'lodash.throttle';
import { useState } from 'react';
import { useEffect } from 'react';

function Field({ value, callback, placeholder }) {

  const [valueField, setValueField] = useState(value);

  const changeThrottle = useCallback(throttle(val => {
    callback(val);
  }, 1000), [callback]);

  const onChange = useCallback(e => {
    setValueField(e.target.value);
    changeThrottle(e.target.value);
  }, [changeThrottle]);

  useEffect(() => {
    setValueField(value);
  }, [value])

  return (
    <input className='Field' type='text' placeholder={placeholder} onChange={onChange} value={valueField} />
  )
}

Field.propTypes = {
  value: propTypes.string.isRequired,
  callback: propTypes.func,
  placeholder: propTypes.string
}

export default React.memo(Field);