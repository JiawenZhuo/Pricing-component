import  {Header}  from './Components/Header';
import './App.css';
import {Switch} from './Components/Switch/Switch';
import React, { useState, useEffect}from 'react'
import Card from './Components/Cards/Card';
import Cards from './Components/Cards/Cards';
import './index.css';


function App() {

  const [monthly, setMonthly] = useState(true);

  const toggleHandler = () => {
    setMonthly(current => !current)
  }
//   useEffect( () => {
//     console.log(checked);
// }, [checked]);

  return (
    <div className='App background'>
      <div><Header>Our Pricing</Header></div>
      <Switch monthly={monthly} onClick={toggleHandler}/>
      <Cards monthly={monthly}/>
    </div>
  );
}
 

export default App;