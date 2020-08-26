export const preLoginReducer = (state = {isLogin: false}, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return {...state, isLogin: action.payload};
    }
    case 'SIGN_OUT': {
      return {...state, isLogin: action.payload};
    }
    default: {
      return state;
    }
  }
};
