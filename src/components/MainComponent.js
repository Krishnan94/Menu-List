import React,{useState} from 'react';
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

const Main=()=>{
    const [selectedDish,ChangeDish] = useState();
        
       const onSelectedDish = (dishId)=>{
           
            ChangeDish(dishId);
        }
  return (
    <div>
      <Header />
      <Menu dishes={DISHES} onClick={(dishId)=>{onSelectedDish(dishId)}} />
      <Dishdetail dish={DISHES.filter((dish)=>dish.id=== selectedDish)[0]} />
      <Footer />
    </div>
  );
}

export default Main;
