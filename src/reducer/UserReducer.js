export const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return [
        ...state,
        {
          name: action.payload.name,
          city: action.payload.city,
          email: action.payload.email,
        },
      ];
    }
    case 'DELETE_USER': {
      return state.filter((user) => user.name != action.payload);
    }
    default: {
      return state;
    }
  }
};
