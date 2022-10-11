const basket = {
  add: (item) => {
    return { type: "ADD_TO_BASKET", payload: item };
  }
}

export default basket;