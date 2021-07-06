import {
  CATEGORY_DATA
} from 'src/constants/SystemConstants';

const initialState: any = {};

const CategoryReducer = (state = initialState, action: any): any => {
  switch ( action.type ) {
    case CATEGORY_DATA:
      const newData = { ...state, ...action.data };
      return newData;
    default:
      return state;
  }
};

export default CategoryReducer;
