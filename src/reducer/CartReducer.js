export const cartReducer = (state = [], action) => {
  let flag = false;
  switch (action.type) {
    case 'ADD_PRODUCT': {
      if (state.length == 0) {
        return [...state, action.payload];
      } else {
        console.log('...else...state..' + state.length);
        console.log('.....state..' + JSON.stringify(state));

        const elementsIndex = state.findIndex(
          (element) => element.id == action.payload.id,
        );
        console.log('.....elementsIndex..' + elementsIndex);
        if (elementsIndex > -1) {
          return state.map((item, index) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                count: item.count + 1,
              };
            }
            return item;
          });
        } else {
          return [...state, action.payload];
        }
      }
    }
    case 'REMOVE_PRODUCT': {
      return state.filter((product) => product.id != action.payload.id);
    }

    default: {
      return state;
    }
  }
};
