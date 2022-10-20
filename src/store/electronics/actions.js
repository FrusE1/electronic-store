const electronics = {
  load: (items, count, params) => {
    return { type: "LOAD_ELECTRONICS", payload: { items, count, params } };
  }
}

export default electronics;