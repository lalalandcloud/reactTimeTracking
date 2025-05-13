import './App.css'
import CardEnfant from './components/cardEnfant'
import React, { useEffect, useState} from 'react';

const App = () => {
    const [timeframe, setTimeframe] = useState ("weekly")

    return (
      <div className='app-container'>
      
      {data.map((item, index) => (
        <CardEnfant
          key={index}
          title = {item.title}
          hours = {item.hours}
          choix = {item.choix}

        />
        ))}

      </div>
      )
}

export default App