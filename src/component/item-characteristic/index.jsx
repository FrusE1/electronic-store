import React from 'react';
import './style.css';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import camelCaseToString from '../../utils/camelcase-to-string';

function ItemCharacteristic({ prop, value }) {

  const bem = withNaming({ e: '__' })
  const cn = bem('Item-Characteristic');

  return (
    <div className={cn()}>
      <div>{camelCaseToString(prop)}</div>
      <div>{value}</div>
    </div>
  )
}

ItemCharacteristic.propTypes = {
  prop: propTypes.string.isRequired,
  value: propTypes.string.isRequired
}

export default React.memo(ItemCharacteristic);