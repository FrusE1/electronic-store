import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Basket from '../../ui/basket';
import modal from '../../store/modal/actions';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';
import Button from '../../ui/button';
import user from '../../store/user/actions';
import { useEffect } from 'react';
import { login } from "../../store/async-actions/user";

function Header() {

  const bem = withNaming({ e: '__' })
  const cn = bem('Header');

  const dispatch = useDispatch();
  const select = useSelector(state => {
    return {
      basket: state.basket,
      auth: state.user.auth,
      user: state.user.profile
    }
  });

  const callbacks = {
    // Открытие модалки с корзиной
    openModalBasket: useCallback((name) => dispatch(modal.open(name)), []),
    // Открытие модалки с формой регистрации
    openModalRegister: useCallback(() => dispatch(modal.open('register')), []),
    // Открытие модалки с формой входа
    openModalLogin: useCallback(() => dispatch(modal.open('login')), []),
    // Выйти с аккаунта
    logout: useCallback(() => {
      dispatch(user.logout());
      localStorage.removeItem('user');
    }, [])
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(login(JSON.parse(localStorage.getItem('user'))));
    }
  }, []);

  return (
    <header className={cn()}>
      <Basket count={select.basket.count} openModal={callbacks.openModalBasket}></Basket>
      {select.auth
        ? <div className={cn('profile')}>
          <div className={cn('username')}>{select.user?.username}</div>
          <Button style={'border-red'} onClick={callbacks.logout}>Выйти</Button>
        </div>
        : <>
          <Button onClick={callbacks.openModalRegister} style="border-red">Зарегистрироваться</Button>
          <Button onClick={callbacks.openModalLogin} style="border-blue">Войти</Button>
        </>
      }
    </header >
  )
}

export default React.memo(Header)