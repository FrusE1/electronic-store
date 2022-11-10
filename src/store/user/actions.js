const user = {
  register: (data) => {
    return { type: "USER_REGISTER_SUCCESS", payload: data };
  },

  registerError: (error) => {
    return { type: "USER_REGISTER_ERROR", payload: error };
  },

  logout: () => {
    return { type: "USER_LOGOUT" }
  },

  login: (data) => {
    return { type: "USER_LOGIN", payload: data }
  },

  loginError: (error) => {
    return { type: "USER_LOGIN_ERROR", payload: error }
  }
}

export default user;