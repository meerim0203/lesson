import React from 'react';

const Cargo = () => {
    return (
        <section id="cargo">
            <div className="container">
                <div className="cargo--general">
                    <div className="cargo--general__block">

                        <h1>Есть груз <span>прямо сейчас?</span></h1>

                        <p>Заполните все обязательные поля</p>



                        <div className="cargo--general__block--line">
                            <label>
                                <input type="text" placeholder="Ф.И.О.*"/>
                            </label>
                        </div>



                        <div className="cargo--general__block--line">
                            <label>
                                <input type="number" placeholder="Номер вашего телефона..."/>
                            </label>
                        </div>

                        <h4>Выберите <span>подходящие</span> услуги:<span>*</span></h4>

                        <div className="cargo--general__block--circle">

                            <label>
                                <input type="radio"/>
                                <p>Портер</p>
                            </label>

                            <label>
                                <input type="radio"/>
                                <p>Грузчики</p>
                            </label>

                            <label>
                                <input type="radio"/>
                                <p>Разборка/сборка мебели</p>
                            </label>

                            <label>
                                <input type="radio"/>
                                <p>Вывоз мусора</p>
                            </label>
                            
                        </div>


                        <label className="cargo--general__block--desc">
                            <input type="search" placeholder="   Комментарии к заказу (необязательно)"/>
                        </label>

                        <div className="cargo--general__block--btn">
                            <button>Заказать</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cargo;