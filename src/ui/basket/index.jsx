import React from 'react';
import icon from './assets/basket.png';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';

function Basket({ count, openModal }) {

  const bem = withNaming({ e: '__' })
  const cn = bem('Basket');

  return (
    <div className={cn()} onClick={() => openModal('basket')}>
      <img src={icon} alt='basket' className={cn('icon')}></img>
      <div className={cn('counter')}><span>{count}</span></div>
    </div>
  )
}

Basket.propTypes = {
  count: propTypes.number.isRequired,
  openModal: propTypes.func.isRequired
}

export default React.memo(Basket);
