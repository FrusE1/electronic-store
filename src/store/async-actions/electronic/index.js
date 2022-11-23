import electronic from "../../electronic/actions"

export const loadElectronic = (id) => {

  return async function (dispatch) {
    dispatch(electronic.load());

    try {
      const response = await fetch(`http://localhost:4000/electronics?id=${id}`)

      const result = await response.json();

      dispatch(electronic.loadSuccess(result[0]));
    } catch (error) {
      dispatch(electronic.loadError(error.message))
    }
  }
}