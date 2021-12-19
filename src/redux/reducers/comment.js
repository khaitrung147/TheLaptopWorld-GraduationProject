import {
  GET_LIST_COMMENTID,
  GET_LIST_COMMENTID_SUCCESS,
  POST_COMMENT_SUCCESS,
  POST_COMMENT,
  REP_COMMENT,
  REP_COMMENT_SUCCESS,
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
    case POST_COMMENT:
      return {
        ...state,
        postload: true,
        status: false,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        postload: false,
        status: true,
      };
    case REP_COMMENT:
      return {
        ...state,
        repload: true,
        repstatus: false,
      };
    case REP_COMMENT_SUCCESS:
      return {
        ...state,
        repload: true,
        repstatus: true,
      };

    default:
      return state;
  }
};

export default commentReducer;
