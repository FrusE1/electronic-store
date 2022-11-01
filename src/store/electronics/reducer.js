const initialState = {
  items: [],
  params: {
    page: 1,
    limit: 8,
    query: '',
    sort: '',
    type: ''
  },
  count: 0,
  error: null,
  waiting: false
}

export default function electronicsReducer(state = initialState, action) {
  switch (action.type) {
    // Загрузка электроники
    case "LOAD_ELECTRONICS":
      return {
        ...state,
        error: null,
        waiting: true
      }
    // Загрузка электроники завершена успешно
    case "LOAD_SUCCESS_ELECTRONICS":
      return {
        items: action.payload.items,
        params: { ...state.params, ...action.payload.params },
        count: action.payload.count,
        error: null,
        waiting: false
      }

    // Ошибка загрузки
    case "LOAD_ERROR_ELECTRONICS":
      return {
        ...state,
        items: [],
        count: 0,
        error: action.payload,
        waiting: false
      }

    default:
      // Нет изменений
      return state;
  }
}