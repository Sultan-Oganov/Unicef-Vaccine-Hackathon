import React from 'react'
import './MainPage.css'

const MainPage = () => {
    return (
        <div className="mainpage">
        <input type="checkbox" id="checkbox1"/>
        <input type="checkbox" id="checkbox2"/>
        <input type="checkbox" id="checkbox3"/>
        <input type="checkbox" id="checkbox4"/>
        <input type="checkbox" id="checkbox5"/>
        <input type="checkbox" id="checkbox6"/>
        
        
            <div htmlFor="checkbox1" className="vaccine__page"> 
                <div className="vaccine__rel">
                    <label htmlFor="checkbox1" className="vaccine__openDiv"><p className='vaccine__openP'>ВАКЦИНА</p></label>
                </div>
            </div>
            <div htmlFor="checkbox2" className="myth__page"> 
                <div className="myth__rel">
                    <label htmlFor="checkbox2" className="myth__openDiv"><p className='myth__openP'>МИФЫ</p></label>
                </div>
            </div>
            <div htmlFor="checkbox3" className="types__page"> 
                <div className="types__rel">
                    <label htmlFor="checkbox3" className="types__openDiv"><p className='types__openP'>ТИПЫ</p></label>
                </div>
            </div>
            <div htmlFor="checkbox4" className="quiz__page"> 
                <div className="quiz__rel">
                    <label htmlFor="checkbox4" className="quiz__openDiv"><p className='quiz__openP'>ВОПРОСЫ</p></label>
                </div>
            </div>
            <div htmlFor="checkbox5" className="static__page"> 
                <div className="static__rel">
                    <label htmlFor="checkbox5" className="static__openDiv"><p className='static__openP'>СТАТИСТИКА</p></label>
                </div>
            </div>
            <div htmlFor="checkbox6" className="online__page"> 
                <div className="online__rel">
                    <label htmlFor="checkbox6" className="online__openDiv"><p className='online__openP'>ОНЛАЙН-ЗАПИСЬ</p></label>
                </div>
            </div>

        </div>
    )
}

export default MainPage

