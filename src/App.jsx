import './App.css'
import CardEnfant from './components/cardEnfant'
import React, { useEffect, useState} from 'react';
import json from "../data.json";
import Btn from './components/btn';

const App = () => {
    const [timeframe, setTimeframe] = useState ("weekly")
    const normalizeTitle = (title) => {
      return title.toLowerCase().replace(" ", "");
    };
    

    return (
      <div className='app-container'>
        <div id='divBtns'>
          <Btn setTimeframe={setTimeframe}/>

        </div>
        <div id='divCards'>
          {json.map((item, index) => (
          <CardEnfant
            key={index}
            title = {item.title}
            type = {normalizeTitle(item.title)}
            hours = {`${item.timeframes[timeframe].current} hrs`}
            choix = {`Last ${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}`}
            totalHours = {`${item.timeframes[timeframe].previous} hrs`}
          />
          ))}

        </div>
      </div>
      )
}

export default App