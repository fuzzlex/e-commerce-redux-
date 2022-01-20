import { FILTER_CATEGORY, ADD_TO_CARD ,SEARCH} from './blogTypes';
import Data from "../../components/data"
import { infoNote, successNote } from '../../components/Toasty';

export const setShopActionFilter = payload => ({ type: FILTER_CATEGORY, state: payload });
export const setShopActionAddCard = (payload, id) => ({ type: ADD_TO_CARD, state:payload, id : id});
export const setShopActionSearch = (payload) => ({ type: SEARCH, state:payload });


export const filterCategory = category => {
  return  dispatch => {
    const newData = Data.filter(product => {
      return product.category === category
    })
    dispatch(setShopActionFilter(newData));
  }
};

export const addCard = (id) => {
  return dispatch => {
    const newData = Data.filter(item=>{
      return item.id === id
    })
    dispatch(setShopActionAddCard(newData,id))  
    successNote("Added successfully go to your cart")     
  }
  
}

export const searchProduct = (value) => {
  return dispatch => {
    const newData = Data.filter(item=>{
      return item.title.toLowerCase().includes(value.toLowerCase())
    })
    dispatch(setShopActionSearch(newData))
    // console.log(newData.length)
    newData.length !== 0 ?
    successNote("Filtered your producs") :
    infoNote("There isn't any product")

  }
  
}


