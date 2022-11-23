const initialState = {
  data: {},
  error: null,
  waiting: false
}

export default function electronicReducer(state = initialState, action) {
  switch (action.type) {
    // Загрузка данных о электронике
    case "LOAD_ELECTRONIC":
      return {
        data: {},
        error: null,
        waiting: true
      }
    // Загрузка данных о электронике завершена успешно
    case "LOAD_SUCCESS_ELECTRONIC":
      return {
        data: action.payload,
        error: null,
        waiting: false
      }

    // Ошибка загрузки
    case "LOAD_ERROR_ELECTRONIC":
      return {
        data: {},
        error: action.payload,
        waiting: false
      }

    default:
      // Нет изменений
      return state;
  }
}