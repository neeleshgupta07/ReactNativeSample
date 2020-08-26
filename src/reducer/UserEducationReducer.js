export const userEductionReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER_EDUCATION': {
      return [
        ...state,
        {
          collage: action.payload.collage,
          education: action.payload.education,
        },
      ];
    }
    default: {
      return state;
    }
  }
};
