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
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una deliciosa pizza con una combinación única de ingredientes que te transportarán a la antigua Roma.',
  },
  {
    name: 'Alemana',
    ingredientes:
      'Salsa de tomate, queso mozzarella, jamón, chorizo, salame, tocino, salchicha y orégano restregado',
    img: pizzaAlemana,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza robusta y sabrosa con una mezcla de carnes alemanas tradicionales.',
  },
  {
    name: 'Dolcetto',
    ingredientes:
      'Sin salsa de tomate, queso mozzarella, plátano, durazno o piña, leche Nestlé y canela en polvo',
    img: pizzaDocetto,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza dulce y exótica perfecta para los amantes de los sabores frutales.',
  },
  {
    name: 'Americana',
    ingredientes:
      'Salsa de tomate, queso mozzarella, jamonada, chorizo, salchicha y orégano restregado',
    img: pizzaAmericana,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza clásica americana con una mezcla de carnes y queso mozzarella.',
  },
  {
    name: 'Hawayana',
    ingredientes:
      'Salsa de tomate, queso mozzarella, piña, jamón y orégano restregado',
    img: pizzaHawayana,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza tropical con piña y jamón que te hará sentir en una isla paradisíaca.',
  },
  {
    name: 'Caprichoza',
    ingredientes:
      'Salsa de tomate, queso mozzarella, salame, champiñón, pimentón, espinaca, aceitunas negras, salchicha y orégano restregado',
    img: pizzaCaprichoza,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza caprichosa con una variedad de ingredientes frescos y sabrosos.',
  },
  {
    name: 'La Última',
    ingredientes:
      'Salsa de tomate, queso mozzarella, piña, chorizo, salame, tocino, durazno y orégano restregado',
    img: pizzaUltima,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza única con una mezcla de ingredientes dulces y salados.',
  },
  {
    name: "Andrea's Pizza",
    ingredientes:
      'Salsa de tomate, queso mozzarella, chorizo, jamón, tocino, champiñón y orégano restregado',
    img: pizzaAndrea,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza especial con una combinación de ingredientes seleccionados por Andrea.',
  },
  {
    name: "Luana's Pizza",
    ingredientes:
      'Salsa de tomate, queso mozzarella, salame, pepperoni, tocino, aceitunas negras y orégano restregado',
    img: pizzaLuana,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza deliciosa con una mezcla de ingredientes seleccionados por Luana.',
  },
  {
    name: 'Chef',
    ingredientes:
      'Salsa de tomate, queso mozzarella, pepperoni en rodajas, chorizo, tocino, pimentón y orégano restregado',
    img: pizzaChef,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza gourmet con una selección de ingredientes de alta calidad.',
  },
  {
    name: 'Diavola',
    ingredientes:
      'Salsa de tomate, queso mozzarella, pepperoni en rodajas, chorizo, tocino, picante italiano y orégano restregado',
    img: pizzaDiavola,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza picante con una mezcla de ingredientes que te harán arder de placer.',
  },
  {
    name: 'Premium',
    ingredientes:
      'Salsa de tomate, queso mozzarella, piña, jamón, pepperoni en rodajas y orégano restregado',
    img: pizzaPremium,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza premium con una combinación de ingredientes de alta calidad.',
  },
  {
    name: 'Vegetariana',
    ingredientes:
      'Salsa de tomate, queso mozzarella, rodajas de tomate, champiñones, espinaca, aceitunas negras y orégano restregado',
    img: pizzaVegetariana,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza saludable y deliciosa con una variedad de ingredientes frescos.',
  },
  {
    name: 'Di Carne',
    ingredientes:
      'Salsa de tomate, queso mozzarella, chorizo, jamón, tocino y orégano restregado',
    img: pizzaDiCarne,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description: 'Una pizza cargada de carne para los amantes de la proteína.',
  },
  {
    name: 'Carbonara',
    ingredientes:
      'Salsa de tomate, queso mozzarella, cebolla blanca, champiñones, tocino y orégano restregado',
    img: pizzaCarbonara,
    price: {
      personal: 10,
      mediana: 20,
      grande: 30,
    },
    description:
      'Una pizza cremosa con una mezcla de ingredientes inspirados en la pasta carbonara.',
  },
];

export const ofertaPizza = [
  {
    title: 'pizza grande',
    description:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    aparte:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    img: pizzaVerde,
  },
  {
    title: 'pizza pequeña',
    description:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    aparte:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    img: pizzaVerde,
  },
  {
    title: 'pizza grande',
    description:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    aparte:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    img: pizzaVerde,
  },
];
