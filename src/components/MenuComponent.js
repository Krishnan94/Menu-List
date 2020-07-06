import React,{useState} from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardText,CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent'

const Menu=(props)=>{   
       const menu = props.dishes.map(dish=>{
           return(
               <div key={dish.id} className="col-12 col-md-5 m-1">
                   <Card onClick={()=>props.onClick(dish.id)}>
                       <CardImg width="100%" src={dish.image} alt={dish.name} />                         
                       <CardBody>
                           <CardTitle heading>{dish.name}</CardTitle>
                       </CardBody>
                      
                   </Card>
               </div>
           );
       });

        return(
            <div className="container">
                <div className="row">
                    {menu}                
                </div>
            </div>

        );
}

export default Menu;

