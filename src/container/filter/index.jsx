import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './style.css';
import { loadElectronics } from "../../store/async-actions/electronics";
import { useDispatch, useSelector } from 'react-redux';
import Select from '../../ui/select';
// import Input from '../../ui/input';
import throttle from 'lodash.throttle';
import Input from '../../ui/input/input';

export default function Filter() {
  const dispatch = useDispatch();
  const params = useSelector(state => state.electronics.params);
  const [valueField, setValueField] = useState('');

  const callbacks = {
    // Сортировка товаров
    sort: useCallback((sort) => dispatch(loadElectronics(params, { sort, page: 1 })), []),
    // Фильтрация по категориям
    typeSelection: useCallback((type) => dispatch(loadElectronics(params, { type, page: 1 })), [])
  }
  // Загрузка по поиску
  const loadingQuery = useCallback(throttle(query => dispatch(loadElectronics(params, { query, page: 1 })), 1000), []);

  const onChange = useCallback(e => {
    setValueField(e.target.value);
    loadingQuery(e.target.value);
  }, []);

  // Данные по сортировке
  const options = {
    sort: useMemo(() => ([
      { value: "", title: "По умолчанию" },
      { value: "name", title: "По именованию" },
      { value: "-price", title: "Сначало дорогие" },
      { value: "price", title: "Сначало дешевые" }
    ]), []),
    type: useMemo(() => ([
      { value: "", title: "По умолчанию" },
      { value: "Смартфоны", title: "смартфоны" },
      { value: "Ноутбуки", title: "ноутбуки" },
      { value: "Фотоаппараты", title: "фотоаппараты" }
    ]), [])
  }

  return (
    <div className='Filter'>
      <Input placeholder='Поиск' onChange={onChange} value={valueField} />
      <Select options={options.sort} value={params.sort} callback={callbacks.sort} />
      <Select options={options.type} value={params.type} callback={callbacks.typeSelection} />
    </div>
  )
}
