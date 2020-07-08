import React,{Component,useState} from 'react';
import {Card,CardImg,CardImgOverlay,Row,Col,Label,CardBody,CardText,ModalBody,Modal,ModalHeader,CardTitle,Breadcrumb,BreadcrumbItem,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const CommentForm =props=> {
    const[isModal,UpdateModal]=useState(false);
    const ToggleModal= ()=>{
        UpdateModal(prevMode => !prevMode);
    }

    const handleComment =event=>{
        ToggleModal();
        props.addComment(props.dishId, values.rating, values.author, values.comment);
        
    }
   
        return(
            <div>
            <Button color="light" onClick={handleComment}><span className="fa fa-pencil fa-lg"></span>Comment Button</Button>      
            <Modal isOpen={isModal} toggle={ToggleModal}>
            <ModalHeader isOpen={isModal} toggle={ToggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                        <Col md={12}>
                                <Label htmlFor="Rating" >Rating</Label>
                                </Col>
                                <Col md={12}>
                                <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                                </Row>

                            <Row className="form-group">
                                <Col md={12}>
                                <Label htmlFor="Your Name" >Your Name</Label>
                                    </Col>
                                <Col md={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3),maxLength:maxLength(15)
                                        }}
                                         />
                                         <Errors 
                                         className="text-danger"
                                         model=".yourname"
                                         show="touched"
                                         messages={{
                                           required :'Required',
                                           minLength:'Enter minimum 3 charcters',
                                           maxLength:'Only maximum of 15 charcters' 
                                         }}
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Col md={12}>
                                <Label htmlFor="comment">Comment</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                          </LocalForm>              
            </ModalBody>
        </Modal> 
        </div>
        )
    };


const RenderComments=({comments, addComment, dishId})=>{
    
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
                <CommentForm dishId={dishId} addComment={addComment}/>
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
                <RenderComments comments={props.comments}
                addComment={props.addComment}
                dishId={props.dish.id}
                 />
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
