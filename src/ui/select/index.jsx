import React from 'react';
import propTypes from 'prop-types';
import { cn as bem } from "@bem-react/classname";
import './style.css';
import { useCallback } from 'react';

function Select({ options, value, callback }) {
  const cn = bem('Select');

  return (
    <select className={cn()} value={value} onChange={(e) => callback(e.target.value)}>
      {options.map((item) => {
        return <option className={cn('')} key={item.value} value={item.value}>{item.title}</option>
      })}
    </select>
  )
}

Select.propTypes = {
  options: propTypes.array.isRequired,
  value: propTypes.string,
  callback: propTypes.func
}

export default React.memo(Select)
