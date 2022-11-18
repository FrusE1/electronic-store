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
import ButtonLink from '../../ui/button-link';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {

  const bem = withNaming({ e: '__' })
  const cn = bem('Header');

  const location = useLocation();
  const navigate = useNavigate();
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
    // Переход к регистрации
    onRegister: useCallback(() => {
      navigate('/register', { state: { back: location.pathname } });
    }, [location.pathname]),
    // Переход к авторизации
    onLogin: useCallback(() => {
      navigate('/login', { state: { back: location.pathname } });
    }, [location.pathname]),
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
          <Link to='/profile' className={cn('username')}>{select.user?.username}</Link>
          <Button style={'border-red'} onClick={callbacks.logout}>Выйти</Button>
        </div>
        : <>
          <Button to='/register' style="border-red" onClick={callbacks.onRegister}>Зарегистрироваться</Button>
          <Button to='/login' style="border-blue" onClick={callbacks.onLogin}>Войти</Button>
        </>
      }
    </header >
  )
}

export default React.memo(Header)