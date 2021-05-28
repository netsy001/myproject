import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

function Forms({ currentId, setCurrentId }) {

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id = currentId) : null);


    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
            clear();
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = (e) => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', selectedFile:'' });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Label><strong>{currentId ? 'Editing' : 'Creating'} an Event </strong> </Form.Label>
                <Form.Group controlId="formGroupCreator">
                    <Form.Label>Creator</Form.Label>
                    <Form.Control name="creator" type="text" placeholder="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formGroupTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formGroupMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control name="message" type="text" placeholder="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                </Form.Group>
                <br></br>
                <div className="selected-file">
                    <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <br></br>
                <Button variant="primary" type="submit">Submit</Button>{' '}
                <Button variant="secondary" onClick={clear}>Clear</Button>
            </Form>
        </div>
    )
}


export default Forms;