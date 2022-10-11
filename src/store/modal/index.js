const initialState = null

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    // Открытие модалки
    case "OPEN_MODAL":
      return action.payload;
    // Закрытие модалки
    case "CLOSE_MODAL":
      return action.payload;
    default:
      // Нет изменений
      return state;
  }
}