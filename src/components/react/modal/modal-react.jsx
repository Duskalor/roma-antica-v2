import { useState } from 'react';

import plus from 'public/plus.svg';
import { toast } from 'sonner';
import { metodosDepago, textToWhatsapp } from '@lib/const';

export const ModalItemCarta = ({ data, iconImg }) => {
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
          <div className='flex flex-col justify-between flex-1 w-full'>
            <h2 className='text-xl text-black'>{data.name}</h2>
            <p className='text-gray-500 '>{data.ingredientes}</p>
            <div className='flex justify-between items-center '>
              <img src={iconImg.icon.src} alt={iconImg.msg} />
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
            className='justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '
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
                  width='600'
                  height='600'
                  className=' rounded-s-xl'
                />

                <section className={'px-10 py-10 w-[600px] '}>
                  <h2 className='text-xl font-semibold py-2 border-b-[1px] border-gray-500 '>
                    {data.name}
                  </h2>
                  <div className=' h-[400px] overflow-y-auto'>
                    {/* <hr className='my-5' /> */}
                    <p className='text-balance pt-4'>{data.ingredientes}</p>
                    <hr className='my-5' />
                    {/* precios de la carta */}
                    <div className='flex justify-between items-center flex-col w-full pr-4'>
                      {Object.entries(data.price).map(([name, price], i) => {
                        return (
                          <fieldset className='space-y-4 w-full' key={i}>
                            <legend className='sr-only'>Delivery</legend>

                            <div>
                              <label
                                for={`radio-${name}`}
                                className='flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white py-1 px-4  text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 items-center '
                              >
                                <div>
                                  <p className='text-gray-700 uppercase font-semibold'>
                                    {name}
                                  </p>

                                  <p className='mt-1 text-gray-900 font-bold'>
                                    S/.{price}
                                  </p>
                                </div>

                                <input
                                  type='radio'
                                  name='delivery'
                                  checked={selectedOption === name}
                                  id={`radio-${name}`}
                                  className='size-5 border-gray-300 text-blue-500'
                                  onChange={() => setSelectedOption(name)}
                                />
                              </label>
                            </div>
                          </fieldset>
                        );
                      })}
                    </div>
                    <hr className='my-5' />
                    {/* metodos de pago */}
                    <div>
                      <h2 className='text-lg font-semibold p-4'>
                        Método de pago
                      </h2>

                      <div className='flex flex-col gap-4 p-4 text-center items-start'>
                        {metodosDepago.map((mtp) => (
                          <a
                            target='_blank'
                            href={`https://api.whatsapp.com/send?phone=+51${textToWhatsapp.number}&text=${mtp.text}`}
                            class='transition-all duration-500 border-2 border-black px-4 mx-4 py-2 rounded-md hover:bg-gray-400'
                          >
                            {mtp.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-end'>
                    <button
                      onClick={() =>
                        toast.success(`Producto comprado - ${data.name}`)
                      }
                      className='wf-full border mt-10 px-5 py-2 rounded bg-red-700 text-white'
                    >
                      Comprar
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
