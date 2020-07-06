import React,{useState} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent'

const Main=()=>{
    const [selectedDish,ChangeDish] = useState();
        
       const onSelectedDish = (dishId)=>{
           
            ChangeDish(dishId);
        }
  return (
    <div>
      <Navbar dark color="primary">
        <NavbarBrand href="/" >Home</NavbarBrand>
      </Navbar>
      <Menu dishes={DISHES} onClick={(dishId)=>{onSelectedDish(dishId)}} />
      <Dishdetail dish={DISHES.filter((dish)=>dish.id=== selectedDish)[0]} />
    </div>
  );
}

export default Main;
