import React from 'react';
import {Link} from 'react-router-dom';
import './FooterComponent.css'

const Footer =props=>{
    return(
<div  className="footer page-footer mt-2 font-small footercolor">

  
  <div className="container">

  
    <div className="row text-center d-flex justify-content-center pt-5 mb-3">

  
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="/home">Home</a>
        </h6>
      </div>
  

  
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="/menu">Menu</a>
        </h6>
      </div>
  

  
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="/contactus">Contact</a>
        </h6>
      </div>
  

  
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="/aboutus">About</a>
        </h6>
      </div>
  

  
      <div className="col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <a href="/home">Help</a>
        </h6>
      </div>
  

    </div>
  
    

  
    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">

  
      <div className="col-md-8 col-12 mt-5">
        <div className="footertext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</div>
      </div>
  

    </div>
  
    

  
    <div className="row pb-3">

  
      <div className="col-md-12">

        <div className="mb-3 mt-5 d-flex flex-center footerimages">

  
                      <a className="btn btn-social-icon btn-google m-2" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook m-2" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin m-2" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter m-2" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google m-2" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
        </div>

      </div>
  

    </div>
  

 

   </div>
   </div>                
    );
}

export default Footer;