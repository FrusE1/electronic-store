import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Profile() {

  const navigate = useNavigate();
  const auth = useSelector(state => state.user.auth);

  useEffect(() => {
    if (!auth) {
      navigate('/login')
    }
  })

  return (
    <div>
      <h1>Username: name</h1>
      <div>Почта</div>
    </div>
  )
}
