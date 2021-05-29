// // import React, {useEffect, useState} from 'react'

// import React from 'react';


// function Events() {
//     // const[state, setState] =useState();

//     // useEfeect(()=>{
//     //     // axios.get:call the api/
//     // },[]);

//     return (
//         <div>
//             <h1>Create events here</h1>
//         </div>
//     )
// }
// export default Events;

import React, {useState, useEffect} from 'react'
import { Container, Row} from 'react-bootstrap';
import { getPosts } from '../actions/posts';
import {  useDispatch } from 'react-redux';
import Form from './Form/Form';
 function Events() {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
     <Container>
         <Row xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Row>
     </Container>
    )
}

export default Events;

