import React from 'react';

const Contact=(props)=> {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        4050, Avenue St Kevin<br />
                        Montreal, Quebec<br />
                        Canada<br />
                        <i className="fa fa-phone"></i>: +123 1234 5678<br />
                        <i className="fa fa-fax"></i>: +142 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:indiafusion@food.net">indianfusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary m-1" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info m-1"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success m-1" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;