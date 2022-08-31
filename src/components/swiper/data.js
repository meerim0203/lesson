import {carryValue} from "@testing-library/user-event/dist/keyboard/shared";
import ro from "./../../asstets/img/car-1.svg";
import po from "./../../asstets/img/car-2.svg";
import c from "./../../asstets/img/car-3.svg";
import d from "./../../asstets/img/car-5.svg";
import f from "./../../asstets/img/car-6.svg";

const Data = [
    {
        id: 1,
        img: ro,
        title: "Портер",
        desc: "У нас имеются 20 портеров",
        price: "500 сом/час"

    },
    {
        id: 2,
        img: po,
        title: "Грузчики",
        desc: "Мы сотрудничаем с 80 грузчиками",
        price: "300 сом/час"

    },
    {
        id: 3,
        img: c,
        title: "Разборка/сборка мебели",
        desc: "Тщательная установка вашей мебели",
        price: "Договорная"

    },
    {
        id: 4,
        img: d,
        title: "Вывоз мусора",
        desc: "Мы за чистый город и за чистый дом",
        price: "От 1000 сом"

    },
    {
        id: 5,
        img: f,
        title: "Спринтер",
        desc: "У нас имеются 20 портеров",
        price: "600 сом/час"

    },
]
export default Data