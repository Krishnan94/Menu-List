import React,{useEffect} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import About from './AboutComponent';
import {useSelector,useDispatch} from 'react-redux';
import { addComment,fetchDishes } from '../redux/ActionCreators';

const Main=()=>{
    const counter = useSelector(state => state);
    const dispatch=useDispatch();

    useEffect(() => {
      dispatch(fetchDishes())
   }, [dispatch])

 
    
      
    const DishWithId = ({match}) => {
      return(        
          <Dishdetail dish={counter.dishes.dishes.filter((dishes)=>dishes.featured)[0]}
          isLoading ={counter.dishes.isLoading}
          isErrMess={counter.dishes.errMess} 
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
              <Home dish={counter.dishes.dishes.filter((dishes)=>dishes.featured)[0]}
              dishesisLoading ={counter.dishes.isLoading}
              dishesisErrMess={counter.dishes.errMess}
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
