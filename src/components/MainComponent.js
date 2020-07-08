import React,{useState} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import About from './AboutComponent';
import {useSelector,useDispatch} from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const Main=()=>{
    const counter = useSelector(state => state);
    const dispatch=useDispatch();

    

      
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={counter.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={counter.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={addComment} 
            />
      );
    };
    
    const Aboutus = ()=>{
      return (
        <About leaders={counter.leaders} />
      )
    }
        const HomePage = () => {
          return(
              <Home dish={counter.dishes.filter((dishes)=>dishes.featured)[0]}
              promotion={counter.promotions.filter((promo)=>promo.featured)[0]}
              leaders={counter.leaders.filter((leader)=>leader.featured)[0]}
              />
          );
        }
  return (
    
    <div>
      <Header />
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/contactus' component={Contact} />} />
              <Route exact path='/aboutus' component={Aboutus} />} />
              <Route exact path='/menu' component={() => <Menu dishes={counter.dishes} />} />
              <Route path='/menu/:dishId'component={DishWithId} />
              <Redirect to='/home' />
      </Switch>
      <Footer />
    </div>
  );
}



export default Main;
