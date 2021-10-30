import {
  GET_LIST_COMMENTID,
  GET_LIST_COMMENTID_SUCCESS,
  POST_COMMENT_SUCCESS,
  POST_COMMENT,
} from "../constants/comment";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case POST_COMMENT:
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
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        load: false,
      };

    default:
      return state;
  }
};

export default commentReducer;
