import React, { useState } from 'react'
import './Types.css'
import girl2 from '../../images/girl2.png'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import one from '../../images/girl.png';
import two from '../../images/girl2.png';
import three from '../../images/covid.png';
import Carousel from 'react-bootstrap/Carousel'
import blue from '../../images/blue.png'


const Types = () => {
    // const [currImg, setCurrImg] = useState(0);

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
                    <Carousel className="types__carousel1">
                        <Carousel.Item>
                            <img 
                            className='d-block w-100 carousel__img'
                            src={blue}
                            />
                            <Carousel.Caption>
                                <h1 style={{color:'#008E97'}} >Инактивированная вакцина</h1>
                                <p style={{lineHeight:'16px',margin:'0'}}>В первом способе создания вакцины используются  <br />болезнетворные вирус или бактерия, или очень <br /> похожие на них микроорганизмы, которые <br /> инактивируют (убивают) с помощью химических <br /> реагентов, тепла или радиации. Этот метод <br /> основывается на технологиях, которые, как было <br /> доказано, эффективно защищают человека, – они <br /> применяются для изготовления вакцин против гриппа и <br /> полиомиелита – и позволяет наладить достаточно <br /> масштабное производство вакцин.

                                Однако для его применения требуются специальные <br /> лабораторные помещения, в которых можно безопасно <br /> выращивать вирус или бактерию, цикл производства <br /> может быть относительно длительным, а для <br /> иммунизации, скорее всего, потребуется введение двух <br /> или трех доз. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className='d-block w-100 carousel__img'
                            src={blue}
                            />
                            <Carousel.Caption>
                                <h1 style={{color:'#008E97'}}>Живая ослабленная вакцина</h1>
                                <p style={{margin:'0'}}>В живой вакцине используется ослабленный или очень <br /> похожий вирус. Примеры вакцин этого типа – вакцина <br /> против кори, эпидемического паротита и краснухи (КПК) <br /> и вакцина против ветряной оспы и опоясывающего <br /> лишая. В этом способе используется технология, <br /> аналогичная получению инактивированной вакцины, и <br /> он может применяться для массового производства. <br /> Однако вакцины этого типа могут оказаться <br /> неприемлемыми для людей с ослабленной иммунной <br /> системой. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className='d-block w-100 carousel__img'
                            src={blue}
                            />
                            <Carousel.Caption>
                                <h1 style={{color:'#008E97'}}>Вирусная векторная вакцина</h1>
                                <p style={{lineHeight:'20px', margin:'0',}}>В этом виде вакцины используется безопасный вирус, <br /> который доставляет специфические субэлементы <br /> (белки) соответствующего микроорганизма, благодаря <br /> чему вакцина способна активировать иммунный ответ, <br /> не вызывая болезни. С этой целью в безопасный вирус <br /> вводится код для формирования определенных частей <br /> соответствующего патогена. Такой безопасный вирус <br /> затем используется в качестве платформы или вектора <br /> для доставки в клетки организма белка, который <br /> активирует иммунный ответ. Примером этого типа <br /> вакцин, которые могут быть разработаны в короткие <br /> сроки, является вакцина против Эболы. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className='d-block w-100 carousel__img'
                            src={blue}
                            />
                            <Carousel.Caption>
                                <h1 style={{color:'#008E97'}}>Субъединичные вакцины</h1>
                                <p style={{margin:'0', lineHeight:'23px'}}>В субъединичных вакцинах используются только <br /> специфические фрагменты (субъединицы) вируса или <br /> бактерии, которые иммунная система должна <br /> распознать. Они не содержат цельных <br /> микроорганизмов или безопасных вирусов в качестве <br /> вектора. В качестве субъединиц могут использоваться <br /> белки или сахара. Большинство вакцин, применяемых в <br /> календаре детских прививок, являются <br /> субъединичными и защищают от таких болезней, как <br /> коклюш, столбняк, дифтерия и менингококковый <br /> менингит.  <br /></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className='d-block w-100 carousel__img' br
                            src={blue}
                            />
                            <Carousel.Caption>
                                <h1 style={{color:'#008E97', fontSize:'35px'}}>Вакцины на основе <br /> генетического  материала <br /> (нуклеиновых кислот)</h1>
                               <p style={{margin:'0', lineHeight:'20px'}}>В отличие от вакцин на основе ослабленных или <br /> нежизнеспособных цельных микроорганизмов или их <br /> фрагментов, в вакцине на основе нуклеиновых кислот <br /> используется участок генетической структуры, <br /> содержащий программу для генерации специфических <br /> белков, а не цельный микроорганизм. ДНК и РНК <br /> содержат код, который используется клетками нашего <br /> организма для выработки белков. При этом ДНК <br /> сначала превращается в информационную РНК, <br /> которая затем используется в качестве программы для <br /> продуцирования специфических белков.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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