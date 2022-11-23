import React from 'react';
import propTypes from 'prop-types';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';

function ListCharacteristics({ items, render, caption }) {

  const bem = withNaming({ e: '__' })
  const cn = bem('List-Characteristics');

  return (
    <ul className={cn()}>
      {caption && <li className={cn('caption')}>{caption}</li>}
      {items.map((item, index) => {
        return <li className={cn('item')} key={index}>{render(item)}</li>
      })}
    </ul>
  )
}

ListCharacteristics.propTypes = {
  items: propTypes.array.isRequired,
  render: propTypes.func.isRequired,
  caption: propTypes.string
}

export default React.memo(ListCharacteristics);