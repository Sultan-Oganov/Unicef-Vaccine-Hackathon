import React from 'react'
import './Modal.css'
import x from '../../images/x.png'
import TextField from '@material-ui/core/TextField';

function Modal(props) {
    return (
        <div className={props.modal ? "modal__wrapper__active" : "modal__wrapper"} onClick={() => props.setModal(false)}>
            <div className={props.modal ? 'modal__content__active' : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <img src={x} className="modal__x"  onClick={()=>props.setModal(false)}/>
                <p className="modal__first">ЕСЛИ ВЫ ПPОШЛИ ВАКЦИНАЦИЮ - <br /> 
                ОСТАВЬТЕ ОТЗЫВ КАК ПРОШЛА ВАКЦИНАЦИЯ</p>
                <div className="modal__second"><p>ФИО:</p> <TextField id="standard-basic" className="modal__fioInp" /></div>
                <div className="modal__third">
                    <div className="modal__thirdAge"><p>Возраст:</p><TextField id="standard-basic" /></div>
                    <div className="modal__sex"><p>пол:</p><TextField id="standard-basic" /></div>
                </div>
                <div className="modal__fourth"><p>Хронические болезни:</p><TextField className="modal__forthInp" id="standard-basic" /></div>
                <div className="modal__fivth">
                    <p>Пропишите какое у вас было самочувствие после <br />получения вакцины:</p>
                    <TextField className="modal__fivthInp" id="standard-basic" />
                </div>
                <div onClick={()=> props.setModal(false)}  className="modal__sendBtn">Отправить</div>
            </div>
        </div>
    )
}

export default Modal
