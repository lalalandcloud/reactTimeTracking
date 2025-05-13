import './cardEnfant.css'

function CardEnfant(props){
    return(
        <div id='divCardTout'>
            <div id='divCard'>
                <h4>{props.title}</h4>
                <h1>{props.hours}</h1>
                <h6>{props.choix} - {props.totalHours}</h6>
            </div>

        </div>
    )
}

export default CardEnfant