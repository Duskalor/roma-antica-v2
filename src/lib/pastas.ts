import fettucicineAlfredo from '@Images/PASTAS/FETTUCCINE-ALFREDO.jpg';
import ganocchiAlPesto from '@Images/PASTAS/GNOCCHI-AL-PESTO.jpg';
import lasagnaBolognese from '@Images/PASTAS/LASAGNA-BOLOGNESE.jpg';
import orecchietteConBrocoli from '@Images/PASTAS/ORECCHIETTE-CON-BRÓCOLI.jpg';
import pastaPuttanesca from '@Images/PASTAS/PASTA-PUTTANESCA.jpg';
import penneAllaArrabbiata from '@Images/PASTAS/PENNE-ALLA-ARRABBIATA.jpg';
import ravioliDeRicotta from '@Images/PASTAS/RAVIOLI-DE-RICOTTA-Y-ESPINACA.jpg';
import spaghettiCarbonara from '@Images/PASTAS/SPAGHETTI-CARBONARA.jpg';
import tagliatelleAlRagu from '@Images/PASTAS/TAGLIATELLE-AL-RAGÚ.jpg';

export const pastas = [
    {
      name: 'SPAGHETTI CARBONARA',
      ingredientes:
        'Spaghetti, panceta o tocino, yemas de huevo, queso pecorino o parmesano rallado, pimienta negra molida.',
      img: spaghettiCarbonara,
      price: {
        plato: 20,
      },
    },
    {
      name: 'FETTUCCINE ALFREDO',
      ingredientes:
        'Fettuccine, crema de leche, mantequilla, queso parmesano, pimienta negra.',
      img: fettucicineAlfredo,
      price: {
        plato: 20,
      },
    }, 
    {
      name: 'PENNE ALLA ARRABBIATA',
      ingredientes:
        'Penne, tomates, ajo, chile o peperoncino, aceite de oliva, perejil.',
      img: penneAllaArrabbiata,
      price: {
        plato: 20,
      },
    },
    {
      name: 'LASAGNA BOLOGNESE',
      ingredientes:
        'Láminas de lasagna, carne de res y cerdo, tomate, zanahoria, apio, cebolla, salsa bechamel, queso parmesano.',
      img: lasagnaBolognese,
      price: {
        plato: 20,
      },
    },
    {
      name: 'RAVIOLI DE RICOTTA Y ESPINACA',
      ingredientes:
        'Ravioli, espinaca fresca, queso ricotta, parmesano, huevo, nuez moscada, salsa de tomate o mantequilla con salvia.',
      img: ravioliDeRicotta,
      price: {
        plato: 20,
      },
    },
    {
      name: 'PASTA PUTTANESCA',
      ingredientes:
        'Pasta (generalmente spaghetti o linguine), tomates, anchoas, aceitunas negras, alcaparras, ajo, chile, perejil, aceite de oliva.',
      img: pastaPuttanesca,
      price: {
        plato: 20,
      },
    },
    {
      name: 'TAGLIATELLE AL RAGÚ',
      ingredientes:
        'Tagliatelle, carne molida de res y cerdo, tomate, zanahoria, apio, cebolla, vino tinto, aceite de oliva.',
      img: tagliatelleAlRagu,
      price: {
        plato: 20,
      },
    },
    {
      name: 'GNOCCHI AL PESTO',
      ingredientes:
        'Gnocchi (de papa), albahaca fresca, piñones, queso parmesano, ajo, aceite de oliva.',
      img: ganocchiAlPesto,
      price: {
        plato: 20,
      },
    },
    {
      name: 'ORECCHIETTE CON BRÓCOLI',
      ingredientes:
        'Orecchiette, brócoli, ajo, aceite de oliva, pecorino o parmesano rallado, chile (opcional).',
      img: orecchietteConBrocoli,
      price: {
        plato: 20,
      },
    },
  ];