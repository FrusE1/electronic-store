const electronics = {
  load: () => {
    return { type: "LOAD_ELECTRONICS" }
  },

  loadSuccess: (items, count, params) => {
    return { type: "LOAD_SUCCESS_ELECTRONICS", payload: { items, count, params } };
  },

  loadError: (error) => {
    return { type: "LOAD_ERROR_ELECTRONICS", payload: error };
  }
}

export default electronics;