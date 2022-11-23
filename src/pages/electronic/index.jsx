import React, { useCallback, useMemo } from 'react';
import './style.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { loadElectronic } from '../../store/async-actions/electronic';
import { cn as bem, withNaming } from "@bem-react/classname";
import ItemCharacteristic from '../../component/item-characteristic';
import propToArray from '../../utils/prop-to-array';
import ListCharacteristics from '../../component/list-characteristics';
import basket from '../../store/basket/actions';
import Button from '../../ui/button';

export default function Electronic() {

  const bem = withNaming({ e: '__' })
  const cn = bem('Electronic');

  const { id } = useParams();
  const electronic = useSelector(state => state.electronic);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadElectronic(id))
  }, [id]);

  const keyArray = useMemo(() => propToArray(electronic.data.characteristics), [electronic]);

  const renders = {
    // Отрисовка карточки товара
    item: useCallback((item) => {
      return <ItemCharacteristic
        prop={item}
        value={electronic.data.characteristics[item]}
      ></ItemCharacteristic>
    }, [electronic])
  }

  const callbacks = {
    // Добавление товара в корзину
    addToBasket: useCallback((item) => dispatch(basket.add(item)), []),
  }

  return (
    <div className={cn()}>
      <div className={cn('head')}>
        <div className={cn('img')}>
          <img src={electronic.data.image} alt={electronic.data.name} />
        </div>
        <div className={cn('characteristics')}>
          <div className={cn('title')}>{electronic.data.name}</div>
          <ListCharacteristics items={keyArray} render={renders.item} caption='Характеристики' />
        </div>
      </div>
      <div className={cn('desc')}>
        <h2>Описание</h2>
        <div>{electronic.data.text}</div>
      </div>
      <div className={cn('btn')}>
        <Button onClick={() => callbacks.addToBasket(electronic.data)} style="blue">В корзину</Button>
      </div>
    </div>
  )
}
