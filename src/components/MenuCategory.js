import React from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { filterCategory } from '../redux/actions/shopActions';
import Data from "./data"

const MenuCategory = () => {
  const dispatch = useDispatch();

    
    const newData = new Set(Data.map(item => (item.category)))
    const handleClick = (category) =>{
      dispatch(filterCategory(category))
  }




  return (

  <div>
      <Nav fill variant="tabs" >
  {Array.from(newData).map(
      (category, index)=> 
  <Nav.Item key={index}>
    <Nav.Link onClick={() => handleClick(category)} >{category}</Nav.Link>
  </Nav.Item>
  )}
  </Nav>)
  </div>
  )
};

export default MenuCategory;
