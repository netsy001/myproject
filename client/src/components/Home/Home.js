import React, {useEffect, useState} from 'react'
import {Row, Container} from 'react-bootstrap';
import '../Home/Home.css';
import Posts from '../Posts/Posts';

//importing hooks useDispatch to dispatch an action
import {  useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import {useHistory } from 'react-router-dom';


function Home() {

    //App is the parent component and as we need to share the currentId between Form and Post with help of useState hook.
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
const history = useHistory();


const moveToEvent = () => {
    history.push('/events');
}

  useEffect(() => {
    // dispatch(getPosts());
    // history.push('/events');
  }, [currentId, dispatch]);

    return (
        <div>
            <Container>
                <Row xs={12} sm={7} >
                    <Posts setCurrentId={setCurrentId} moveToEvent = {moveToEvent} />
                </Row>
            </Container>
        </div>
    )
}

export default Home;

