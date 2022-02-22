import  {Header}  from './Components/Header';
import './App.css';
import {Switch} from './Components/Switch/Switch';
import React, { useState}from 'react';
import Cards from './Components/Cards/Cards';
import './index.css';
function App() {

  const [monthly, setMonthly] = useState(true);

  const toggleHandler = () => {
    setMonthly(current => !current)
  }
  return (
    <div className='App background'>
      <div><Header>Our Pricing</Header></div>
      <Switch monthly={monthly} onClick={toggleHandler}/>
      <Cards monthly={monthly}/>
    </div>
  );
}
 

export default App;