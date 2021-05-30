import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import {useHistory } from 'react-router-dom';
import { createPost, updatePost } from '../../actions/posts';
// import { Redirect } from "react-router-dom";




function Forms({ currentId, setCurrentId }) {

    // redirectToReferrer: false

    const [postData, setPostData] = useState({
        title: '', message: '', selectedFile: ''
    });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id = currentId) : null));


    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === 0) {
            dispatch(createPost({...postData, name:user?.result?.name}));
            clear();
            
        } else {
            dispatch(updatePost(currentId, {...postData, name:user?.result?.name}));
            clear();
            history.push('/');
        }
        // clear();
        // redirectToReferrer: true;
      
    };
    if (!user?.result?.name) {
        return (
          <h5 className="please-sign">
              Please Sign In to create your own Event.
          </h5>
        );
      }

    const clear = (e) => {
        setCurrentId(0);
        setPostData({  title: '', message: '', selectedFile:'' });
    }

    // const redirectToReferrer = this.state.redirectToReferrer;
    //     if (redirectToReferrer === true) {
    //          <Redirect to="/" />
    //     }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Label><strong>{currentId ? 'Editing' : 'Creating'} an Event </strong> </Form.Label>
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