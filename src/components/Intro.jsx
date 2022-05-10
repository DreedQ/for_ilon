import React from 'react';

const Intro = () => {
    return (
        <>
            < div className="header">
                <div className="header__block">
                    <div className="header__block_inner">
                        <h1>ПУТЕШЕСТВИЕ</h1>
                        <h2>на красную планету</h2>
                    </div>
                    <div className="header__btn_box">
                        <button className='header__btn'>Начать путешествие</button>
                    </div>
                </div>
                <div className="offers">
                    <div className="offer_box">
                        <div className="offer bg_gradient_1">
                            <span>мы</span>
                            <span><h1>1</h1>на рынке</span>
                        </div>
                    </div>
                    <div className="offer_box">
                        <div className="offer bg_gradient_2">
                            <span>гарнтируем</span>
                            <span><h1>50%</h1>безопасность</span>
                        </div>
                    </div>
                    <div className="offer_box">
                        <div className="offer bg_gradient_3">
                            <span>календарик на</span>
                            <span><h1>2001г</h1>в подарок</span>
                        </div>
                    </div>
                    <div className="offer_box">
                        <div className="offer bg_gradient_4">
                            <span>путешествие</span>
                            <span><h1>597</h1>дней</span>
                        </div>
                    </div>

                </div>
            </div>
        </>


    );
}

export default Intro;
