import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import './HomeComponent.css'

const RenderCard=({item, isLoading,errMess})=> {
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else {
    return(
        <Card className="cardheight">
            <CardImg src={item.image} height="250" alt={item.name} />
            <CardBody>
            <CardTitle className="font-weight-bold">{item.name}</CardTitle>
            {item.designation ? <CardSubtitle className="font-weight-bold">{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
    }
}

const Home=(props)=> {
    return(
        <div className="container">
            <div className="row d-flex align-items-start">
                <div className="col-12 col-md m-1 flex-grow-1">
                <RenderCard item={props.dish} isLoading={props.dishesisLoading} 
                errMess={props.dishesisErrMess} />
                </div>
                <div className="col-12 col-md m-1 flex-grow-1">
                    <RenderCard item={props.promotion} isLoading={props.promoisLoading} 
                errMess={props.promoisErrMess} />
                </div>
                <div className="col-12 col-md m-1 flex-grow-1">
                    <RenderCard item={props.leaders} isLoading={props.leaderisLoading} 
                errMess={props.leaderisErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;