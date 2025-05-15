import './cardEnfant.css'
import imgExercice from '../assets/images/icon-exercise.svg'
import imgPlay from "../assets/images/icon-play.svg";
import imgCare from "../assets/images/icon-self-care.svg";
import imgSocial from "../assets/images/icon-social.svg";
import imgStudy from "../assets/images/icon-study.svg";
import imgWork from "../assets/images/icon-work.svg";


function CardEnfant(props){
    const images = {
    work : imgWork,
    exercise : imgExercice,
    play : imgPlay,
    social : imgSocial,
    study : imgStudy,
    selfcare : imgCare
    }
    return(
        <div id='divCardTout' className={`card ${props.type}`}>
            <div id='divImgType'>
                <img src={images[props.type]} alt="" />
            </div>
            <div id='divCard'>
                <div id='divCard1'>
                    <h4>{props.title}</h4>
                    <p>...</p>
                </div>
                <div id='divHrs'>
                    <h1>{props.hours}</h1>
                    <h6>{props.choix} - {props.totalHours}</h6>
                </div>
            </div>
        </div>
    )
}

export default CardEnfant