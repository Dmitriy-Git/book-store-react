const initialState = {
    items: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK_TO_CARD':
          return {
            ...state,
            items: [
                ...state.items,
                action.payload
            ]
        };
        case 'REMOVE_BOOK_FROM_CARD':
          return {
            ...state,
            items: state.items.filter( item => item.id != action.payload)
        };
        default:
            return state;
      }
} 