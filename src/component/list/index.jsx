import React from 'react';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';

function List({ items, render }) {

  const bem = withNaming({ e: '__' })
  const cn = bem('List');

  return (
    <div className={cn()}>
      {items.map((item) => {
        return <div className={cn('item')} key={item.id}>{render(item)}</div>
      })}
    </div>
  )
}

List.propTypes = {
  items: propTypes.array.isRequired,
  render: propTypes.func.isRequired
}

export default React.memo(List)