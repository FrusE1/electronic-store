import React, { useCallback, useMemo } from 'react';
import './style.css';
import Field from '../../ui/field';
import { loadElectronics } from "../../store/async-actions/electronics";
import { useDispatch, useSelector } from 'react-redux';
import Select from '../../ui/select';

export default function Filter() {
  const dispatch = useDispatch();
  const params = useSelector(state => state.electronics.params);

  const callbacks = {
    // Загрузка по поиску
    loadingQuery: useCallback((query) => dispatch(loadElectronics(params, { query, page: 1 })), []),
    // Сортировка товаров
    sort: useCallback((sort) => dispatch(loadElectronics(params, { sort, page: 1 })), []),
    // Фильтрация по категориям
    typeSelection: useCallback((type) => dispatch(loadElectronics(params, { type, page: 1 })), [])
  }

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
      { value: "смартфоны", title: "смартфоны" },
      { value: "ноутбуки", title: "ноутбуки" },
      { value: "фотоаппараты", title: "фотоаппараты" }
    ]), [])
  }

  return (
    <div className='Filter'>
      <Field placeholder='Поиск' callback={callbacks.loadingQuery} value={params.query} />
      <Select options={options.sort} value={params.sort} callback={callbacks.sort} />
      <Select options={options.type} value={params.type} callback={callbacks.typeSelection} />
    </div>
  )
}
