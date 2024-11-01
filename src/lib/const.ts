import slide01 from '@Images/carrousel/1.jpg';
import slide02 from '@Images/carrousel/3.jpg';
import slide03 from '@Images/carrousel/4.jpg';


import otro from '@Images/otro.jpg';

export const imagesCarrousel = [
  { image: slide01, name: 'image1' },
  { image: slide02, name: 'image3' },
  { image: slide03, name: 'image4' },
 
];

export const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/carta', label: 'Carta' },
  { href: '/contacto', label: 'Contacto' },
  // { href: '/test', label: 'test' },
];

export const ofertas = [
  {
    title: 'COMBO 1',
    description:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    aparte:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    image: otro,
  },
  {
    title: 'COMBO 2',
    description:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    aparte:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    image: otro,
  },
  {
    title: 'COMBO 3',
    description:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    aparte:
      'La pizza es uno de los platos más icónicos y apreciados a nivel mundial.',
    image: otro,
  },
];

export const textToWhatsapp = {
  number: 989881253,
  text: 'Hola, quiero hacer una reserva',
};

export const metodosDepago = [
  {
    name: 'Yape, interbank (plin)',
    text: 'Quisiera pagar con Yape, interbank (plin)',
    // img: plin,
  },
  {
    name: 'Culqui express (cobra mas comisión)',
    text: 'Quisiera pagar con Culqui express (cobra mas comisión)',
    // img: culqui,
  },
];
