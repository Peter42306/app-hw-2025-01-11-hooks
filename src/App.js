import logo from './logo.svg';
import './App.css';
import User from './components/User/User';
import User1 from './components/User1/User1';
import User2 from './components/User2/User2';
import ChangerTitle from './components/ChangerTitle/ChangerTitle';
import SimpleTimer from './components/SimpleTimer/SimpleTimer';
import Task1Form1 from './components/Task1Form1/Task1Form1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task1Form2 from './components/Task1Form2/Task1Form2';
import CalclulatorExchangeInput from './components/CalclulatorExchangeInput/CalclulatorExchangeInput';
import CalculatorExchangeResult from './components/CalculatorExchangeResult/CalculatorExchangeResult';
import { useState } from 'react';


function App() {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  
  const handleCurrencyChange = (currency) => {
    setCurrency(currency);
    
    const exchangeRates = {
      USD: 1,
      EUR: 0.97515,
      UAH: 42.47368,
      RON: 4.8571
    };

    setExchangeRate(exchangeRates[currency]);
  };

  const handleAmountChange = (amount) => {
    setAmount(Number(amount));
  };

  return (
    <>
        {/* <User></User> */}
        {/* <User1></User1> */}
        {/* <User2></User2> */}
        {/* <ChangerTitle></ChangerTitle> */}
        {/* <SimpleTimer></SimpleTimer> */}
        {/* <Task1Form1></Task1Form1> */}
        {/* <Task1Form2></Task1Form2> */}
        
        {/* Currency calculator */}
        <CalclulatorExchangeInput
          onCurrencyChange={handleCurrencyChange}
          onAmountChange={handleAmountChange}
        />

        <CalculatorExchangeResult
          amount={amount}
          currency={currency}
          exchangeRate={exchangeRate}
        />
    </>
  );
}

export default App;
