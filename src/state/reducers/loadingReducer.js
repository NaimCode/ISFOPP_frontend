import * as actionType from "../../data/const";

const reducer = (state = false, action) => {
  switch (action.type) {
    case actionType.CHARGING:
      return true;
    case actionType.NOT_CHARGING:
      return false;
    default:
      return state;
  }
};

export default reducer;
