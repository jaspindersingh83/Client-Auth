import {
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHECK_IF_AUTHENTICATED,
} from '../actions';

export default (auth = {}, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED:
    window.localStorage.setItem('token',action.payload);
    return { ...auth, authenticated: true };
    case USER_UNAUTHENTICATED:
    window.localStorage.removeItem('token');
      return { ...auth, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...auth, error: action.payload };
    case CHECK_IF_AUTHENTICATED:
    window.localStorage.getItem('token');
    return { ...auth };
    default:
      return auth;
  }
};
