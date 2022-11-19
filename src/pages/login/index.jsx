import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../../container/login-form';
import './style.css';

export default function Login() {

  const auth = useSelector(state => state.user.auth);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      const back = location.state?.back ? location.state.back : '/'
      navigate(back)
    }
  }, [auth]);

  return (
    <div className='Login'>
      <LoginForm />
    </div>
  )
}
