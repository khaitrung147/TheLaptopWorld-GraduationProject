import {
  GET_LIST_COMMENTID,
  GET_LIST_COMMENTID_SUCCESS,
} from "../constants/comment";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_COMMENTID:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_COMMENTID_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data,
        load: false,
      };
    default:
      return state;
  }
};

export default commentReducer;
