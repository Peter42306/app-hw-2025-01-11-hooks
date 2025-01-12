import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Collapse, Container, FloatingLabel, Form } from 'react-bootstrap';


const Task1Form2 = () => {
  const [formData, setFormData] = useState({ sender: "", text: "" }); // данные из формы
  const [messages, setMessages] = useState([]); // массив сообщений
  const [openAddMessageButton, setOpenAddMessageButton] = useState(false);
  
  // Обработчик отправки сообщения
  const handleSendMessage = () => {
    if(formData.sender.trim() && formData.text.trim()){
      const newMessage = {
        sender: formData.sender.trim(),
        text: formData.text.trim(),
        time: new Date(),
      };
      setMessages([ ...messages,newMessage ]); // добавляем новое сообщение в массив
      setFormData({ sender: "", text: "" }); // очищаем форму
    }
  };

  // Форматирование времени
  const formatDate = (date) => {
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
  }

  const handleSenderChange = (event) => {
    setFormData({ ...formData, sender: event.target.value })
  }

  const handleTextChange = (event) => {
    setFormData({ ...formData, text: event.target.value })
  }

  return(    
    <Container  className='mt-3'>      

      <Button 
        className='w-100 mb-3' 
        variant='secondary' 
        //disabled
        onClick={() => setOpenAddMessageButton(!openAddMessageButton)}
        area-control="example-collapse-text"
        aria-expanded={openAddMessageButton}
      >
        Add new message
      </Button>

      <Collapse in={openAddMessageButton} className='mb-3'>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
      
      <FloatingLabel 
        controlId='floatingInputName'
        label="Your name"
        className='mb-3'
      >
        <Form.Control
          type='text'        
          placeholder=''
          value={formData.sender}
          onChange={handleSenderChange}
        >
        </Form.Control>
      </FloatingLabel>

      <FloatingLabel 
        controlId='floatingInputText'
        label="Your text"
        className='mb-3'
      >
        <Form.Control
          type='text'
          as="textarea" 
          placeholder=''
          value={formData.text}
          onChange={handleTextChange}
        >
        </Form.Control>
      </FloatingLabel>

      <Button 
        className='w-100'
        onClick={handleSendMessage}
      >
        Send message
      </Button>
      
      {/* Список сообщений */}
      {messages.slice().reverse().map((message, index) => (
        <Card key={index} className='mt-3'>
          <Card.Header className='d-flex justify-content-between'>
            <span>{message.sender}</span>
            <span>{formatDate(new Date(message.time))}</span>
          </Card.Header>
          <Card.Body>
            {message.text}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}  

Task1Form2.propTypes = {};

Task1Form2.defaultProps = {};

export default Task1Form2;
