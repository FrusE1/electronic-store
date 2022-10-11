import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemBasket from '../../component/item-basket';
import LayoutModal from '../../wrappers/layout-modal';
import basket from "../../store/basket/actions";
import List from "../../component/list";
import './style.css';

export default function BasketModal() {

  const items = useSelector(state => state.basket.items);
  const dispatch = useDispatch();

  const callbacks = {
    // Удаление товара из корзины
    removeFromBasket: useCallback((id) => dispatch(basket.remove(id)), [])
  }

  const renders = {
    // Отрисовка карточки товара в корзине
    item: useCallback((item) => {
      return <ItemBasket
        item={item}
        removeFromBasket={callbacks.removeFromBasket}
      ></ItemBasket>
    }, [])
  }

  return (
    <LayoutModal>
      {items.length
        ? <List items={items} render={renders.item}></List>
        : <h2 className='Basket-modal__text'>Корзина пуста</h2>
      }
    </LayoutModal>
  )
}
