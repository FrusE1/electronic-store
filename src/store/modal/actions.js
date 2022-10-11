const modal = {
  open: (name) => {
    return { type: "OPEN_MODAL", payload: name };
  },
  close: () => {
    return { type: "CLOSE_MODAL", payload: null };
  }
}

export default modal;