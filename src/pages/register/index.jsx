import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import RegisterForm from '../../container/register-form';
import './style.css';

export default function Register() {

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
    <div className='Register'>
      <RegisterForm />
    </div>
  )
}
