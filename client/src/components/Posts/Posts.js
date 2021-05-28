import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm></Col>
                    {
                        posts.map((post) => (
                            // <Container fluid>
                            <div key={post._id}>
                                <Post post={post} setCurrentId={setCurrentId} />
                            </div>
                            // </Container>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Posts;
