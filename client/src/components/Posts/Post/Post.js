import React from 'react'
import { Card, Button, Row, Image, Col } from 'react-bootstrap';
import '../Post/Post.css';
import {useDispatch} from 'react-redux';
import {deletePost} from '../../../actions/posts';


function Post({ post, setCurrentId }) {

    const dispatch = useDispatch();

    return (
        <div className="event-display">
                <Row xs="3">
                    <Col xs={6} md={4}>
                            <Image className= "image-style" src={post.selectedFile} roundedCircle fluid/>
                        </Col>
                        <Col xs={6} md={4} >
                            <Card.Title><h4 className="post-title">{post.title.toUpperCase()}</h4></Card.Title>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card.Text><p className="message" >{post.message}</p></Card.Text>
                            <Button className="update-button" variant="primary" onClick ={()=> setCurrentId(post._id)} >Update Event</Button> &nbsp; 
                            <Button className="delete-button" variant="danger" onClick ={()=> dispatch(deletePost(post._id))} >Delete Event</Button>
                        </Col>
                </Row>
        </div >

    )
}

export default Post;