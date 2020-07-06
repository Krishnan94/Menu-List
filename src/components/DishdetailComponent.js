import React from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardText,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const RenderComments=({comments})=>{
        if(comments!=null){

            const comment = comments.map(comment=>{
            return(
                <div className="p-2">
                <div className="pb-2">
                    {comment.comment}
                </div>
                <div className="pb-2">
                   -- {comment.author} ,{comment.date}
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
            <div class="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
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
                <RenderComments comments={(props.comments)}/>
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
