import slide01 from '@Images/carrousel/1.jpg';
import slide02 from '@Images/carrousel/3.jpg';
import slide03 from '@Images/carrousel/4.jpg';

import otro from '@Images/otro.jpg';

import VISION from '@Images/MI VI/VISION.png';
import MISION from '@Images/MI VI/MISION.png';

import CALIDAD from '@Images/VALORES/CALIDAD.png';
import AMABILIDAD from '@Images/VALORES/AMABILIDAD.png';
import LIMPIEZA from '@Images/VALORES/LIMPIEZA.png';
import PASION from '@Images/VALORES/PASION.png';

import facebook from '@Images/REDES/facebook.svg';
import instagram from '@Images/REDES/instagram.svg';
import tiktok from '@Images/REDES/tiktok.svg';

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

export const visionMision = [
  {
    title: 'Visión',
    description:
      'Ofrecer una experiencia gastronómica única y autentica, destacando la calidad, frescura y tradición de la cocina italiana, con un enfoque en el servicio al cliente y la satisfacción de todos los que nos visitan.',
    reverse: false,
    img: VISION,
  },
  {
    title: 'Misión',
    description:
      'Convertirnos en la trattoria de referencia en Cusco, reconocida por su autenticidad italiana, calidad en sus productos y como un lugar de encuentro para disfrutar de una excelente comida en un ambiente acogedor.',
    reverse: true,
    img: MISION,
  },
];

export const valores = [
  {
    title: 'Calidad',
    img: CALIDAD,
  },
  {
    title: 'Amabilidad',
    img: AMABILIDAD,
  },
  {
    title: 'Limpieza',
    img: LIMPIEZA,
  },
  {
    title: 'Pasión',
    img: PASION,
  },
];

export const redes = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/Trattoria-Don-Vito-107418418351644',
    icon: facebook,
    username: 'Pizzeria Roma Antica Trattoria',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/trattoria_donvito/',
    icon: instagram,
    username: 'Pizzeria Roma Antica Trattoria',
  },
  {
    name: 'tiktok',
    url: 'https://www.tiktok.com/@trattoria_donvito',
    icon: tiktok,
    username: 'Pizzeria Roma Antica Trattoria',
  },
];
