import { useState } from 'react';
import prueba from '../assets/prueba.jpeg';
import wp from '../assets/wp.jpeg'
export const Testimonios = () => {

  const[currentSlide, SetCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    SetCurrentSlide((currentSlide - 1 + photos.length) % photos.length)
  }
  
  const handleNextSlide = () => {
    SetCurrentSlide((currentSlide + 1 ) % photos.length)
  }

  const photos = [
    {
      id:"slide1",
      photo:prueba
    },
    {
      id:"slide2",
      photo:wp
    },
    {
      id:"slide3",
      photo:prueba
    },
    {
      id:"slide4",
      photo:wp
    }
  ]

    return(
<section className='min-h-screen w-full bg-neutral px-2 pb-40 pt-32'>
<h1 className="text-3xl mb-20 md:mx-10 md:text-4xl font-bold text-customBlack text-center">
           Casos de éxitos
         </h1>
<div className="carousel">
  {
    photos.map(({id, photo}, index) => (
      <div key={id} id={id} className={`carousel-item w-full ${index === currentSlide ? 'active' : 'hidden'}`}>
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div className="rounded-[2rem] w-[272px] h-[572px] bg-white dark:bg-gray-800">
      <img key={id} src={photo} className="rounded-3xl w-[272px] h-[572px]" alt="photo carousel" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 -left-7 -right-7 md:-left-40 md:-right-40 top-1/2">
    <button onClick={handlePrevSlide} className="btn btn-circle">❮</button>
        <button onClick={handleNextSlide} className="btn btn-circle">❯</button>
    </div>
        </div>
      </div>
    ))
  }
</div> 
</section>
    )
}