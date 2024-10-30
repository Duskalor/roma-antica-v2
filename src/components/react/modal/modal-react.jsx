import { useState } from 'react';
import pizzaIcon from 'public/pizza-icon.svg';
import plus from 'public/plus.svg';

export const ModalItemCarta = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    Object.keys(data.price)[0]
  );

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <div className='flex space-x-6 bg-white p-5 rounded-lg hover:scale-110 transition-all cursor-pointer duration-500 '>
          <img
            src={data.img.src}
            alt={data.name}
            width='120'
            className='rounded-lg'
          />
          <div className='flex flex-col justify-between'>
            <h2 className='text-xl text-black'>{data.name}</h2>
            <p className='text-gray-500 '>{data.ingredientes}</p>
            <div className='flex justify-between items-center '>
              <img src={pizzaIcon.src} alt='pizzaIcon' />
              <span className='justify-center flex bg-plus rounded-lg p-2 text-white w-12 h-8 '>
                <img src={plus.src} alt='agregar' />
              </span>
            </div>
          </div>
        </div>
      </button>
      {showModal ? (
        <>
          <div
            className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-[${
              data.img.width * 2 - 50
            }px]`}
            onClick={() => setShowModal(false)}
          >
            <div
              className='relative my-6 mx-auto  bg-white rounded-xl '
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex'>
                <img
                  src={data.img.src}
                  alt={data.name}
                  className=' rounded-s-xl'
                />

                <div className='px-10 py-10'>
                  <h2 className='text-xl font-semibold'>{data.name}</h2>
                  <hr className='my-5' />
                  <p className='text-balance'>{data.ingredientes}</p>
                  <hr className='my-5' />
                  <div className='flex justify-between items-center flex-col w-full'>
                    {Object.entries(data.price).map(([name, price], i) => {
                      return (
                        <fieldset class='space-y-4 w-full'>
                          <legend class='sr-only'>Delivery</legend>

                          <div>
                            <label
                              for={`radio-${name}`}
                              class='flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500'
                            >
                              <div>
                                <p class='text-gray-700'>{name}</p>

                                <p class='mt-1 text-gray-900'>{price}</p>
                              </div>

                              <input
                                type='radio'
                                name='delivery'
                                checked={selectedOption === name}
                                id={`radio-${name}`}
                                class='size-5 border-gray-300 text-blue-500'
                                onChange={() => setSelectedOption(name)}
                              />
                            </label>
                          </div>
                        </fieldset>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
};
