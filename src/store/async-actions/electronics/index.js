import electronics from "../../electronics/actions"

export const loadElectronics = () => {
  return function (dispatch) {
    fetch('http://localhost:4000/electronics')
      .then(response => response.json())
      .then(json => dispatch(electronics.load(json)))
  }
} 