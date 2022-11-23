const electronic = {
  load: () => {
    return { type: "LOAD_ELECTRONIC" }
  },

  loadSuccess: (data) => {
    return { type: "LOAD_SUCCESS_ELECTRONIC", payload: data };
  },

  loadError: (error) => {
    return { type: "LOAD_ERROR_ELECTRONIC", payload: error };
  }
}

export default electronic;