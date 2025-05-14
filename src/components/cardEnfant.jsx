import './cardEnfant.css'

function CardEnfant(props){
    return(
        <div id='divCardTout'>
            <div id='divCard'>
                <div>
                    <h4>{props.title}</h4>
                    <p>...</p>
                </div>
                <h1>{props.hours}</h1>
                <h6>{props.choix} - {props.totalHours}</h6>
            </div>
        </div>
    )
}

export default CardEnfant