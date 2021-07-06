import {
  combineReducers
} from 'redux';
import { UserReducer } from 'src/redux/reducers/user-reducer';
import SystemReducer from 'src/redux/reducers/system-reducer';
import CategoryReducer from 'src/redux/reducers/category-reducer';

const reducers = {
  user: UserReducer,
  system: SystemReducer,
  categories: CategoryReducer
};

export default combineReducers(reducers);
