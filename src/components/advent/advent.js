import React from 'react';
import i from "./../../asstets/img/work-1.svg"
import c from "./../../asstets/img/work-2.svg"
import o from "./../../asstets/img/work-3.svg"
import n from "./../../asstets/img/work-4.svg"

const Advent = () => {
    return (
        <section id="advent">
            <div className="container">
                <div className="advent--general">

                    <div className="advent--general__block">
                        <img src={i} alt="img"/>
                        <p>Надёжная и бережная <br />доставка</p>
                    </div>

                    <h1 className="advent--general__title">Преи<span>мущес</span>тва</h1>

                    <div className="advent--general__block">
                        <img src={c} alt="img"/>
                        <p>Саблюдаем дорожные <br />правила и этикет</p>
                    </div>
                </div>

                <div className="advent--two">

                    <div className="advent--general__block">
                        <img src={o} alt="img"/>
                        <p>5 лет опыта работы</p>
                    </div>

                    <div className="advent--general__block">
                        <img src={n} alt="img"/>
                        <p>На месте когда и где <br />нужно</p>
                    </div>

                </div>

                
            </div>
        </section>
    );
};

export default Advent;