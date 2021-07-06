import {
  CATEGORY_DATA
} from 'src/constants/SystemConstants';

const setCategoryData = ( data: any ): any => {
  return {
    type: CATEGORY_DATA,
    data: data
  };
};

export default setCategoryData;
