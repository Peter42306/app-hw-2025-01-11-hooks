import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';


const Task1Form1 = () => {
  const [message, setMessage] = useState({ sender: "", text: "" });

  function handleSenderChange(event){
    setMessage({ ...message, sender: event.target.value });
  }

  function handleTextChange(event){
    setMessage({  ...message, text: event.target.value });
  }

  
  return(
    <Container className='mt-3'>      
      <Card>      
      <Card.Header>{message.sender?.trim() || "Name of message sender"}</Card.Header>
      <Card.Body>{message.text?.trim() || "Text of message"}</Card.Body>
      </Card>      
      <hr></hr>

      <div className='mt-3'>
        <Button className='w-100 mb-3' variant='secondary' disabled>Add new message</Button>      
        <FloatingLabel
          controlId='floatingInput'
          label="Your name"
          className='mb-3'
        >
        <Form.Control type='text' placeholder='' value={message.sender} onChange={handleSenderChange}></Form.Control>
        </FloatingLabel>

        <FloatingLabel
          controlId='floatingInput'
          label="Your message"
          className='mb-3'
        >
        <Form.Control type='textarea' placeholder='' value={message.text} onChange={handleTextChange}></Form.Control>
        </FloatingLabel>      

        <Button className='w-100'>Send message</Button>
      </div>     

    </Container>    
  );
}


Task1Form1.propTypes = {};

Task1Form1.defaultProps = {};

export default Task1Form1;
