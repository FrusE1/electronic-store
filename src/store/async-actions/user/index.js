import user from "../../user/actions"

export const userRegister = (data) => {

  return async function (dispatch) {
    try {
      const response = await fetch(`http://localhost:4000/register`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      localStorage.setItem('user', JSON.stringify({ email: data.email, password: data.password }));

      dispatch(user.register(result.user));
    } catch (error) {
      dispatch(user.registerError(error.message))
    }
  }
}

export const login = (data) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://localhost:4000/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.status >= 400) {
        throw new Error('Неверный пароль или логин')
      }

      const result = await response.json();
      localStorage.setItem('user', JSON.stringify({ email: data.email, password: data.password }));
      dispatch(user.login(result.user));
    } catch (error) {
      dispatch(user.loginError(error.message))
    }
  }
}