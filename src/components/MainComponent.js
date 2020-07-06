import React,{useState} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import {COMMENTS} from '../shared/comment';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main=()=>{
    const [selectedDish,ChangeDish] = useState();
        
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={DISHES.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={COMMENTS.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };  
        const HomePage = () => {
          return(
              <Home dish={DISHES.filter((dishes)=>dishes.featured)[0]}
              promotion={PROMOTIONS.filter((promo)=>promo.featured)[0]}
              leaders={LEADERS.filter((leader)=>leader.featured)[0]}
              />
          );
        }
  return (
    
    <div>
      <Header />
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/contactus' component={Contact} />} />
              <Route exact path='/menu' component={() => <Menu dishes={DISHES} />} />
              <Route path='/menu/:dishId'component={DishWithId} />
              <Redirect to='/home' />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
