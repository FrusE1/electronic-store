const initialState = {
  items: [],
  count: 0
}

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    // Добавление товара в корзину
    case "ADD_TO_BASKET":
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      } else {
        return {
          items: [...state.items, action.payload],
          count: state.count + 1
        }
      }
    case "REMOVE_FROM_BASKET":
      return {
        items: state.items.filter(item => item.id !== action.payload),
        count: state.count - 1
      }
    default:
      // Нет изменений
      return state;
  }
}