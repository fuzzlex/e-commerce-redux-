import { FILTER_CATEGORY , ADD_TO_CARD,SEARCH} from '../actions/blogTypes';
import Data from "../../components/data"

const initialState = {
  productList: Data,
  toAddedIds : [],
  toAddedProduct: [],
};



const shopReducer = (state = initialState , action) => {
  console.log(action)
    switch (action.type) {
      case FILTER_CATEGORY:
        return {
          ...state,
          productList : action.state
        };
      case ADD_TO_CARD:
        return {
          ...state,
          toAddedIds : [...state.toAddedIds, action.id],
          toAddedProduct:[...state.toAddedProduct , action.state]
        };
      case SEARCH:
        return {
          ...state,
          productList : action.state
        };
      default:
        return state;
    }
  };
  
  export default shopReducer;
