import React from 'react';
import numberFormat from '../../utils/number-format';
import Button from '../../ui/button/button-red';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';

function ItemBasket({ item, addToBasket }) {

  const bem = withNaming({ e: '__' })
  const cn = bem('Item-basket');

  return (
    <div className={cn()}>
      <div className={cn('image')}>
        <img src={item.image} alt={item.type}></img>
      </div>
      <div className={cn('price')}>{numberFormat(item.price, { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })}</div>
      <div className={cn('name')}>{item.name}</div>
      <Button onClick={() => addToBasket(item)}>Удалить</Button>
    </div>
  )
}

ItemBasket.propTypes = {
  item: propTypes.object.isRequired,
  addToBasket: propTypes.func.isRequired
}

export default React.memo(ItemBasket);