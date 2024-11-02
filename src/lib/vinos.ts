import cabernetSauvi from '@Images/VINO/CABERNET-SAUVIGNON.png';
import chardonnay from '@Images/VINO/CHARDONNAY.jpg';
import malbec from '@Images/VINO/MALBEC.jpg';
import merlot from '@Images/VINO/MERLOT.jpg';
import pinotNoir from '@Images/VINO/PINOT-NOIR.png';
import prosecco from '@Images/VINO/PROSECCO.png';
import riesling from '@Images/VINO/RIESLING.jpg';
import rose from '@Images/VINO/ROSÉ.jpg';
import sauvignonBlanc from '@Images/VINO/SAUVIGNON-BLANC.jpg';
import syrah from '@Images/VINO/SYRAH.png';

export const vinos = [
  {
    name: 'CABERNET SAUVIGNON',
    ingredientes:
      'Frutas negras (cereza negra, cassis), pimiento verde, cedro, tabaco, vainilla.',
    img: cabernetSauvi,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino tinto robusto y complejo con notas de frutas negras y especias.',
  },
  {
    name: 'MERLOT',
    ingredientes: 'Ciruela, cereza negra, chocolate, hierbas secas.',
    img: merlot,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino tinto suave y afrutado con toques de chocolate y hierbas.',
  },
  {
    name: 'CHARDONNAY',
    ingredientes: 'Manzana verde, cítricos, piña, mantequilla, vainilla.',
    img: chardonnay,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino blanco cremoso y afrutado con notas de mantequilla y vainilla.',
  },
  {
    name: 'SAUVIGNON BLANC',
    ingredientes: 'Toronja, manzana verde, espárragos, notas herbales.',
    img: sauvignonBlanc,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino blanco fresco y herbáceo con toques cítricos y de manzana verde.',
  },
  {
    name: 'PINOT NOIR',
    ingredientes: 'Cereza, frambuesa, arándano, setas, suelo húmedo.',
    img: pinotNoir,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino tinto elegante y ligero con notas de frutas rojas y tierra húmeda.',
  },
  {
    name: 'MALBEC',
    ingredientes: 'Ciruela, mora, chocolate, tabaco, pimienta negra.',
    img: malbec,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino tinto intenso y especiado con sabores de frutas oscuras y chocolate.',
  },
  {
    name: 'RIESLING',
    ingredientes: 'Manzana verde, lima, miel, melocotón, mineralidad.',
    img: riesling,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino blanco dulce y afrutado con notas de miel y melocotón.',
  },
  {
    name: 'SYRAH',
    ingredientes: 'Mora, arándano, pimienta negra, ahumado, carne curada.',
    img: syrah,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino tinto robusto y especiado con sabores de frutas oscuras y ahumado.',
  },
  {
    name: 'PROSECCO',
    ingredientes: 'Manzana verde, pera, flores blancas, miel.',
    img: prosecco,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino espumoso fresco y afrutado con notas de manzana y flores blancas.',
  },
  {
    name: 'ROSÉ',
    ingredientes: 'Fresas, frambuesas, flores, melón.',
    img: rose,
    price: {
      copa: 20,
      botella: 50,
    },
    description:
      'Un vino rosado ligero y afrutado con sabores de fresas y frambuesas.',
  },
];
