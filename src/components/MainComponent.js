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
import { addComment,fetchDishes,fetchLeader,fetchPromos } from '../redux/ActionCreators';

const Main=()=>{
    const counter = useSelector(state => state);
    const dispatch=useDispatch();

    useEffect(() => {
      dispatch(fetchDishes());
      dispatch(fetchLeader());
      dispatch(fetchPromos());
   }, [dispatch])

 
    
      
    const DishWithId = ({match}) => {
      return(        
        <Dishdetail dish={counter.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading ={counter.dishes.isLoading}
          isErrMess={counter.dishes.errMess} 
            comments={counter.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={addComment} 
            />
      );
    };
    
    const Aboutus = ()=>{
      return (
        <About leaders={counter.leaders.leaders} />
      )
    }
        const HomePage = () => {
          return(
              <Home dish={counter.dishes.dishes.filter((dishes)=>dishes.featured)[0]}
              dishesisLoading ={counter.dishes.isLoading}
              dishesisErrMess={counter.dishes.errMess}
              promotion={counter.promotions.promotions.filter((promo)=>promo.featured)[0]}
              promoisLoading ={counter.promotions.isLoading}
              promoisErrMess={counter.promotions.errMess}
              leaders={counter.leaders.leaders.filter((leader)=>leader.featured)[0]}
              leaderisLoading ={counter.promotions.isLoading}
              leaderisErrMess={counter.promotions.errMess}
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
