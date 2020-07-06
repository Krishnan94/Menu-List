import React from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardText,CardTitle} from 'reactstrap';

const RenderComments=({comments})=>{
        if(comments!=null){

            const comment = comments.map(comment=>{
            return(
                <div className="p-2">
                <div className="pb-2">
                    {comment.commentorComments}
                </div>
                <div className="pb-2">
                   -- {comment.commentorName} ,{comment.commentedDate}
                </div>
                </div>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                {comment}
            </div>
        );
        }
        else{
            return <div></div>
        }
    }
const Dishdetail = props =>{    
    if (props.dish != null){
    return(
        <div className="container">
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                  <CardTitle>{props.dish.name}</CardTitle>
                  <CardText>{props.dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            <div  className="col-12 col-md-5 m-1">
                <RenderComments comments={(props.dish.comments)}/>
            </div>

         </div>
         </div>
        );
    }
    else
        return(
            <div></div>
        );

} 

export default Dishdetail;
