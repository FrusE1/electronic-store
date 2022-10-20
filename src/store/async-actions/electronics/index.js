import electronics from "../../electronics/actions"

export const loadElectronics = (params = {}) => {

  const { page = 1, limit = 8 } = params;

  return async function (dispatch) {
    const response = await fetch(`http://localhost:4000/electronics?_limit=${limit}&_page=${page}`);
    const items = await response.json();
    const count = Number(response.headers.get('x-total-count'));
    dispatch(electronics.load(items, count, params));
  }
} 