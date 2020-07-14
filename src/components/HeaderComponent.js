import React,{useState} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse,Label,Input, NavItem, Jumbotron,Modal,Button,ModalBody,ModalHeader,Form,FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {PromotionSlider} from './SliderComponent';
import './Header.css';
import {currentUser} from  '../redux/ActionCreators';
import {useDispatch} from 'react-redux';


const Headaer= props=>{
    const[isNavOpen,UpdateNavOpen]=useState(false);
    const[isModal,UpdateModal]=useState(false);
    const [isLogin,setisLogin]=useState(false);
    const[userName,setUserName]=useState();
    const dispatch=useDispatch();
    let username=null;
    let password=null;

    const OnToggler= event=>{
        UpdateNavOpen(prevMode => !prevMode);
    }

    const ToggleModal= ()=>{
        if(isLogin){
            setisLogin(prevMode => !prevMode);
        }
        else{
        UpdateModal(prevMode => !prevMode);
        }

    }

    const handleLogin =event=>{
       
       
        ToggleModal();
        console.log("UserName is "+ username.value+"Password is "+ password.value);
        if(!(username=="")){
        setUserName(username.value.toUpperCase());
        setisLogin(true);
        
        }
    
        event.preventDefault();
    }
    return(
        <>
        <Navbar dark expand="md">
           
        <NavbarToggler onClick={OnToggler} />
        <NavbarBrand className="mr-auto" href="/" >
            <img src="assests/images/logo.png" height="30" width="31" alt="Logo"/>
        </NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar >
        <Nav navbar>
                <NavItem>
                     <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                     <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                    </NavItem>
                <NavItem>
                        <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                </NavItem>
                 <NavItem>
                        <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto pr-4" navbar>
                <div className="textcolor">
                    {isLogin? `Welcome ${userName} `:''}
                </div>
            </Nav>
            <Nav className="float-right" navbar>
                <NavItem>
                    <Button  onClick={ToggleModal}>
                        <span className="fa fa-sign-in fa-lg">{isLogin ? 'Logout': 'Login'}</span>
                    </Button>
                </NavItem>
            </Nav>
            </Collapse>
       
        </Navbar>
        <div className="slider">
       <PromotionSlider />  
       </div>
        <Modal isOpen={isModal} toggle={ToggleModal}>
            <ModalHeader isOpen={isModal} toggle={ToggleModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleLogin} action="post">
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username" 
                        innerRef={(input)=>username=input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" 
                        innerRef={(input)=>password=input}/>

                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" id="password" name="remember" />
                        Remember Me
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Login</Button>
                </Form>
            </ModalBody>
        </Modal>
        </>
    );
}

export default Headaer;