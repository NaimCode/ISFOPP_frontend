import * as actionType from "../../data/const";
export const loadingTrue = () => {
  return (dispatch) => {
    dispatch({
      type: actionType.CHARGING,
    });
  };
};
export const loadingFalse = () => {
  return (dispatch) => {
    dispatch({
      type: actionType.NOT_CHARGING,
    });
  };
};
export const setAccueil = (result) => {
  return (dispatch) => {
    dispatch({
      type: actionType.SET_ACCUEIL,
      payload: result,
    });
  };
};
