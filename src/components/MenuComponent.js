import React,{useState, useEffect} from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardText,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import './MenuComponent.css';
import { MDBCol, MDBIcon,MDBFormInline } from 'mdbreact';

const Menu=(props)=>{
    
    const [menu,setMenuName]=useState(props.dishes.dishes);
    const OnchangeSearch= event =>{
        const letter = event.target.value.toLowerCase();
        if(letter==""){
            setMenuName(props.dishes.dishes)
        }
        else{
        const filtermenu = props.dishes.dishes.filter((dish)=>{
           return dish.name.toLowerCase().includes(letter);
        });
     setMenuName(filtermenu);
    }
    }   
 
    
       if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-2">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-6">
                        <h3>Menu</h3>                        
                    </div>
                    
                    <div className="col-6  pl-4">
                    <MDBCol md="12">
                        <MDBFormInline className="md-form">           
                            <input className="form-control form-control-sm ml-5 w-75"  onChange={OnchangeSearch} type="text" placeholder="Search" aria-label="Search" />
                            <MDBIcon className="pl-2" icon="search" />
                        </MDBFormInline>
                    </MDBCol>
                    </div>                                   
                    </div>
                <hr /> 
                <div className="row margin">
                    {menu.map(dish=>{
            return(
                <div key={dish.id}  className="col-12 cardheights col-md-5 m-4">
                    <Card>
                     <Link to={`/menu/${dish.id}`}>
                        <CardImg width="100%" height="250" src={dish.image} alt={dish.name} />                         
                        <CardBody>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardBody>
                        </Link>                      
                    </Card>
                </div>
            );
        })
        }
                </div>
            </div>

        );
    }
}

export default Menu;

