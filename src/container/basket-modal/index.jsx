import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import Item from '../../component/item-basket';
import LayoutModal from '../../wrappers/layout-modal';
import List from "../../component/list";
import './style.css';

export default function BasketModal() {

  const items = useSelector(state => state.basket.items);

  const callbacks = {
    addToBasket: () => { }
  }

  const renders = {
    // Отрисовка карточки товара
    item: useCallback((item) => {
      return <Item
        item={item}
        addToBasket={callbacks.addToBasket}
      ></Item>
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
