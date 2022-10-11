const basket = {
  add: (item) => {
    return { type: "ADD_TO_BASKET", payload: item };
  },
  remove: (id) => {
    return { type: "REMOVE_FROM_BASKET", payload: id }
  }
}

export default basket;