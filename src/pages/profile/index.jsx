import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cn as bem, withNaming } from "@bem-react/classname";
import { login } from "../../store/async-actions/user";
import './style.css';

export default function Profile() {

  const bem = withNaming({ e: '__' })
  const cn = bem('Profile');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(login(JSON.parse(localStorage.getItem('user'))));
    } else {
      navigate('/login')
    }
  }, [user.auth])

  return (
    <div className={cn()}>
      <h1 className={cn('name')}>{user.profile.username}</h1>
      <div className={cn('email')}>{user.profile.email}</div>
    </div>
  )
}
