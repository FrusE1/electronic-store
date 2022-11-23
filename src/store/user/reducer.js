const initialState = {
  profile: {},
  auth: false,
  error: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    // Регистрация успешна
    case "USER_REGISTER_SUCCESS":
      return {
        profile: action.payload,
        auth: true,
        error: null
      }

    // Ошибка при регистрации
    case "USER_REGISTER_ERROR":
      return {
        profile: {},
        auth: false,
        error: action.payload
      }

    // Выйти с аккаунта
    case "USER_LOGOUT":
      return {
        profile: {},
        auth: false,
        error: null
      };

    // Войти в аккаунт
    case "USER_LOGIN":
      return {
        profile: action.payload,
        auth: true,
        error: null
      };

    // Ошибка при входе
    case "USER_LOGIN_ERROR":
      return {
        profile: {},
        auth: false,
        error: action.payload
      };

    default:
      // Нет изменений
      return state;
  }
}