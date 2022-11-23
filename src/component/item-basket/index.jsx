import React from 'react';
import numberFormat from '../../utils/number-format';
import Button from '../../ui/button';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import modal from '../../store/modal/actions';

function ItemBasket({ item, removeFromBasket, link }) {

  const bem = withNaming({ e: '__' })
  const cn = bem('Item-basket');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const callbacks = {
    // Переход на страницу товара
    loadItem: useCallback(() => {
      navigate(link);
      dispatch(modal.close());
    }, [])
  }

  return (
    <div className={cn()}>
      <div className={cn('image')}>
        {link
          ? <a onClick={() => callbacks.loadItem()}><img src={item.image} alt={item.type}></img></a>
          : <img src={item.image} alt={item.type}></img>
        }
      </div>
      <div className={cn('price')}>{numberFormat(item.price, { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })}</div>
      {link
        ? <a onClick={() => callbacks.loadItem()} className={cn('name')}>{item.name}</a>
        : <div className={cn('name')}>{item.name}</div>
      }
      <Button onClick={() => removeFromBasket(item.id)} style="red">Удалить</Button>
    </div>
  )
}

ItemBasket.propTypes = {
  item: propTypes.object.isRequired,
  removeFromBasket: propTypes.func.isRequired,
  link: propTypes.string
}

export default React.memo(ItemBasket);