const initialState = {
  items: []
}

export default function electronicsReducer(state = initialState, action) {
  switch (action.type) {
    // Загрузка электроники
    case "LOAD_ELECTRONICS":
      return { items: action.payload };
    default:
      // Нет изменений
      return state;
  }
}