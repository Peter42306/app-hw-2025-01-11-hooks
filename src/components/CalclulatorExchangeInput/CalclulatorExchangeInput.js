import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Form } from 'react-bootstrap';


const CalclulatorExchangeInput = ({ onCurrencyChange, onAmountChange }) => {
  
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState(0);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    onCurrencyChange(event.target.value);
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    onAmountChange(event.target.value);
  }

  return(    
    <Container className='mt-3'>
      <p>CalclulatorExchangeInput Component</p>
      <Card>
        <Card.Header>
          Select currency & enter amount
        </Card.Header>
        <Card.Body>
          <Form>
            
            <Form.Group>
              
              <Form.Select
                value={currency}
                onChange={handleCurrencyChange}
              >
                <option>Select currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="UAH">UAH</option>
                <option value="RON">RON</option>                
              </Form.Select>
            </Form.Group>

            <Form.Group className='mt-3'>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type='number'
                min={0}
                value={amount}
                onChange={handleAmountChange}
              >
              </Form.Control>              
            </Form.Group>

          </Form>
        </Card.Body>

      </Card>      
    </Container>    
  );
}


CalclulatorExchangeInput.propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired
};

CalclulatorExchangeInput.defaultProps = {};

export default CalclulatorExchangeInput;
