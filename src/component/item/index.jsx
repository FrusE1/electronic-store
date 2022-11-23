import React from 'react';
import numberFormat from '../../utils/number-format';
import Button from '../../ui/button';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';
import { Link } from 'react-router-dom';

function Item({ item, addToBasket, link }) {

  const bem = withNaming({ e: '__' })
  const cn = bem('Item');

  return (
    <div className={cn()}>
      <div className={cn('image')}>
        {link
          ? <Link to={link}><img src={item.image} alt={item.type}></img></Link>
          : <img src={item.image} alt={item.type}></img>
        }
      </div>
      <div className={cn('price')}>{numberFormat(item.price, { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })}</div>
      {link
        ? <Link to={link} className={cn('name')}>{item.name}</Link>
        : <div className={cn('name')}>{item.name}</div>
      }
      <Button onClick={() => addToBasket(item)} style="blue">В корзину</Button>
    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  addToBasket: propTypes.func.isRequired,
  link: propTypes.string
}

export default React.memo(Item);