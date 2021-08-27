import * as actionType from "../../data/const";
const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.SET_ACCUEIL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
