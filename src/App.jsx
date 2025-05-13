import './App.css'
import CardEnfant from './components/cardEnfant'
import React, { useEffect, useState} from 'react';
import json from "../data.json";

const App = () => {
    const [data, setData] = useState(null);
    const [timeframe, setTimeframe] = useState ("weekly")

    return (
      <div className='app-container'>
      
      {data.map((item, index) => (
        <CardEnfant
          key={index}
          title = {item.title}
          hours = {`${item.timeframes[timeframe].current} heures`}
          choix = {`Last ${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}`}
          totalHours = {`${item.timeframes[timeframe].previous} heures`}
          
        />
        ))}

      </div>
      )
}

export default App