const initialState = {
  items: [],
  params: {
    page: 1,
    limit: 8
  },
  count: 0
}

export default function electronicsReducer(state = initialState, action) {
  switch (action.type) {
    // Загрузка электроники
    case "LOAD_ELECTRONICS":
      return {
        items: action.payload.items,
        count: action.payload.count,
        params: { ...state.params, ...action.payload.params }
      }

    default:
      // Нет изменений
      return state;
  }
}