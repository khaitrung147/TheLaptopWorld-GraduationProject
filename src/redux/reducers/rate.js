import { GET_LIST_RATEID, GET_LIST_RATEID_SUCCESS } from "../constants/rate";

const rateReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_RATEID:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_RATEID_SUCCESS:
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

export default rateReducer;
