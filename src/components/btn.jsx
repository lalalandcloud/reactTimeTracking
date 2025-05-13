import './btn.css'

function Btn () {
    return(
        <div className='timeframe-buttons'>
            <button onClick={() => setTimeframe("daily")}>Daily</button>
            <button onClick={() => setTimeframe("weekly")}>Weekly</button>
            <button onClick={() => setTimeframe("monthly")}>Monthly</button>
        </div>

    )
}

export default Btn