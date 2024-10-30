import {
  pizzaAlemana,
  pizzaAmericana,
  pizzaAndrea,
  pizzaCaprichoza,
  pizzaCarbonara,
  pizzaChef,
  pizzaDiavola,
  pizzaDiCarne,
  pizzaDocetto,
  pizzaHawayana,
  pizzaLuana,
  pizzaPremium,
  pizzaRomaAntica,
  pizzaUltima,
  pizzaVegetariana,
} from '@Images/PIZZA';

import pizzaVerde from '@Images/pizzaverde.jpg';

export const pizzas = [
  {
    name: 'Roma Ántica',
    ingredientes:
      'Salsa de tomate, queso mozzarella, piña, salame, pepperoni, tocino y orégano restregado',
    img: pizzaRomaAntica,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Alemana',
    ingredientes:
      'Salsa de tomate, queso mozzarella, jamón, chorizo, salame, tocino, salchicha y orégano restregado',
    img: pizzaAlemana,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Dolcetto',
    ingredientes:
      'Sin salsa de tomate, queso mozzarella, plátano, durazno o piña, leche Nestlé y canela en polvo',
    img: pizzaDocetto,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Americana',
    ingredientes:
      'Salsa de tomate, queso mozzarella, jamonada, chorizo, salchicha y orégano restregado',
    img: pizzaAmericana,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Hawayana',
    ingredientes:
      'Salsa de tomate, queso mozzarella, piña, jamón y orégano restregado',
    img: pizzaHawayana,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Caprichoza',
    ingredientes:
      'Salsa de tomate, queso mozzarella, salame, champiñón, pimentón, espinaca, aceitunas negras, salchicha y orégano restregado',
    img: pizzaCaprichoza,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'La Última',
    ingredientes:
      'Salsa de tomate, queso mozzarella, piña, chorizo, salame, tocino, durazno y orégano restregado',
    img: pizzaUltima,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: "Andrea's Pizza",
    ingredientes:
      'Salsa de tomate, queso mozzarella, chorizo, jamón, tocino, champiñón y orégano restregado',
    img: pizzaAndrea,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: "Luana's Pizza",
    ingredientes:
      'Salsa de tomate, queso mozzarella, salame, pepperoni, tocino, aceitunas negras y orégano restregado',
    img: pizzaLuana,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Chef',
    ingredientes:
      'Salsa de tomate, queso mozzarella, pepperoni en rodajas, chorizo, tocino, pimentón y orégano restregado',
    img: pizzaChef,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Diavola',
    ingredientes:
      'Salsa de tomate, queso mozzarella, pepperoni en rodajas, chorizo, tocino, picante italiano y orégano restregado',
    img: pizzaDiavola,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Premium',
    ingredientes:
      'Salsa de tomate, queso mozzarella, piña, jamón, pepperoni en rodajas y orégano restregado',
    img: pizzaPremium,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Vegetariana',
    ingredientes:
      'Salsa de tomate, queso mozzarella, rodajas de tomate, champiñones, espinaca, aceitunas negras y orégano restregado',
    img: pizzaVegetariana,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Di Carne',
    ingredientes:
      'Salsa de tomate, queso mozzarella, chorizo, jamón, tocino y orégano restregado',
    img: pizzaDiCarne,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
  {
    name: 'Carbonara',
    ingredientes:
      'Salsa de tomate, queso mozzarella, cebolla blanca, champiñones, tocino y orégano restregado',
    img: pizzaCarbonara,
    price: {
      largue: 10,
      family: 20,
      mediana: 30,
    },
  },
];

export const ofertaPizza = [
  {
    title: 'pizza grande',
    description:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    aparte:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    image: pizzaVerde,
  },
  {
    title: 'pizza pequeña',
    description:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    aparte:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    image: pizzaVerde,
  },
  {
    title: 'pizza mediana',
    description:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    aparte:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    image: pizzaVerde,
  },
];

Object.groupBy(pizzas, (pizza) => pizza.price.mediana);
