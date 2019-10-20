const whiskeysReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.map((item, index) => {
      if (item.id === action.sessionId) {
        item.favorite = favoriteValue;
        return item;
      }
      return item;
    });
  }
  switch (action.type) {
    case "setWhiskeyList": {
      return action.data;
    }
    case "favorite": {
      return updateFavorite(true);
    }
    case "unfavorite": {
      return updateFavorite(false);
    }
    default:
      return state;
  }
};
export default whiskeysReducer;
