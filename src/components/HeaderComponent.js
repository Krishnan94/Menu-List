import React from 'react';
import {Navbar,NavbarBrand,Jumbotron} from 'reactstrap';

const Headaer= props=>{
    return(
        <>
        <Navbar dark>
            <div class="container">
        <NavbarBrand href="/" >Home</NavbarBrand>
        </div>
        <Jumbotron>
        <div class="container">
            <div className ="row row-header">
                <div className="col-12 col-sm-6">
                <h1>Indian Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
            </div>
            </div>  
        </Jumbotron>
      </Navbar>
        </>
    );
}

export default Headaer;