import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import FileBase from 'react-file-base64';

import {useDispatch} from 'react-redux';

import {createPost} from '../../actions/posts';

function Forms() {

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', selectedFile: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear =(e) => {
    e.preventDefault();
    
}

    return (
        <div>
            <Form>
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
                <Button variant="primary" type ="submit">Submit</Button>{' '}
                <Button variant="secondary" onClick ={clear}>Clear</Button>{' '}
            </Form>
        </div>
    )
}


export default Forms;