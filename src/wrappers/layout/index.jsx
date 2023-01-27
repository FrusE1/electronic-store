import React from 'react';
import propTypes from 'prop-types';
import { cn as bem } from "@bem-react/classname";
import './style.css';
import { Outlet } from 'react-router-dom';
import Header from '../../container/header';

function Layout() {

  const cn = bem('Layout');

  return (
    <div className={cn()}>
      <Header />
      <Outlet />
    </div>
  )
}

export default React.memo(Layout)