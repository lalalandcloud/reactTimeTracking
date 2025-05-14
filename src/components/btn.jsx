import './btn.css'
import React from 'react'
import jerem from '../assets/images/image-jeremy.png'

function Btn({setTimeframe}) {
    return(
            <div className='timeframe-buttons'>
                <div id="divUser">
                    <div id='divImgJ'>
                        <img src={jerem} alt="" />
                    </div>
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
                <div id="btnsss">
                    <button onClick={() => setTimeframe("daily")}>Daily</button>
                    <button onClick={() => setTimeframe("weekly")}>Weekly</button>
                    <button onClick={() => setTimeframe("monthly")}>Monthly</button>
                </div>
            </div>
    )
}

export default Btn