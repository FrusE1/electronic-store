import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Basket from '../../ui/basket';
import modal from '../../store/modal/actions';
import { cn as bem } from "@bem-react/classname";
import './style.css'

function Header() {

  const cn = bem('Header');

  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket);

  const callbacks = {
    // Открытие модалки
    openModal: useCallback((name) => dispatch(modal.open(name)), [])
  }

  return (
    <header className={cn()}>
      <Basket count={basket.count} openModal={callbacks.openModal}></Basket>
    </header >
  )
}

export default React.memo(Header)