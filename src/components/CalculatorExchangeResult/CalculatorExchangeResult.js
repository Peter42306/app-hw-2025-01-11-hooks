import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';


const CalculatorExchangeResult = ({ amount, currency, exchangeRate }) => {

  // Проверка на корректность данных
  if (!exchangeRate || amount <= 0) {
    return (
      <Container className='mt-3'>
        <p>CalculatorExchangeResult Component</p>
        <Card>
          <Card.Header>Exchange result</Card.Header>
          <Card.Body>
            <p>Please select a valid currency and enter an amount.</p>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  const result = amount / exchangeRate;

  return(
    <Container className='mt-3'>      
      <p>CalculatorExchangeResult Component</p>
      <Card>
        <Card.Header>Exchange result</Card.Header>
        <Card.Body>          
          <p>{amount} {currency} = {result.toFixed(2)} USD at exchange rate: {exchangeRate}</p>
        </Card.Body>
      </Card>
    </Container>    
  );
}
 

CalculatorExchangeResult.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  exchangeRate: PropTypes. number.isRequired,
};

CalculatorExchangeResult.defaultProps = {};

export default CalculatorExchangeResult;
