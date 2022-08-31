import React from 'react';
import a from "./../../asstets/img/bg-1.png"
import p from "./../../asstets/img/porter.svg"

const Hero = () => {
    return (
       <section id="hero">
           <div className="container">
               <div className="hero--general">
                   <img src={a} alt="img" className="hero--general__bg"/>
                   <div className="hero--general__group">
                       <h1>ПЕРЕЕЗД ДОМОВ, КВАРТИР <br />И ОФИСОВ</h1>
                       <ul>
                           <li>Грузовые перевозки осуществляются 24/7</li>
                           <li>Организуем комфортный переезд по Бишкеку и по <br />всему Кыргызстану!</li>
                           <li><span>Любим и гордимся своей работой</span></li>
                       </ul>
                       <button>Вызвать</button>
                   </div>
                   <img src={p} alt="img" className="hero--general__porter"/>
               </div>
           </div>
       </section>
    );
};

export default Hero;