import React, { useState } from 'react'
import './Types.css'
import girl2 from '../../images/girl2.png'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import one from '../../images/girl.png';
import two from '../../images/girl2.png';
import three from '../../images/covid.png';

// const images = [
//     {
//       img: one 
//       },
//     {
  
//       img: two,
//     },
//     {
//       img: three,
//     },
//   ];


const Types = () => {
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className="types__wrap">
            <img src={girl2} className="types__girl2" />
            <div className="types__topDiv">
                <p className="types__topText">ВИДЫ ВАКЦИН И ИХ ОТЛИЧИЯ</p>
                <p className="types__topContext">
                Различают три основных подхода к разработке вакцин  <br />
                в зависимости от того, что используют для иммунизации:  <br />
                цельный вирус или бактерию; фрагменты микроорганизма,  <br />
                вызывающие иммунный ответ; только генетический материал,  <br />
                содержащий код для синтеза конкретных белков,  <br />
                а не цельный вирус.  <br />
                </p>
            </div>
            <div className="types__downDiv">
                <div className="types__carousel">
                    
                </div>
            </div>
        </div>
    )
}

export default Types


// <div
// className="types__carouselInner"
// style={{ backgroundImage: `url(${images[currImg].img})` }}
// >
// <div
// className="types__left"
// onClick={() => {
//     currImg > 0 && setCurrImg(currImg - 1);
// }}
// >
// <ArrowBackIosIcon style={{ fontSize: 30 }} />
// </div>
// <div className="types__center">

// </div>
// <div
// className="types__right"
// onClick={() => {
//     currImg < images.length - 1 && setCurrImg(currImg + 1);
// }}
// >
// <ArrowForwardIosIcon style={{ fontSize: 30 }} />
// </div>
// </div>