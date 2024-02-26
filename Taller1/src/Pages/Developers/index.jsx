import Slider from "react-slick"; // Crea la funcionalidad del carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Developers() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slideToShow: 3,
      slideToScroll: 1,
      autoplaySpeed: 20,
      autoplay: true
    }

    return (
      <>
      
      <div className='rounded-xl w-3/4 m-auto mt-10 bg-violet-100 pt-10'>
      <div className='mt-30'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className='text-black'>
              <div className='bg-white h-[300px] text-black rounded-xl pt-12' >
                <img src={d.img} alt='' className='h-44 w-44 rounded-full my-auto mx-auto' />
              </div>
              <div className='flex flex-col items-center justify-center gap-5 p-5'>
                  <p className='text-xl font-semibold'>{d.name}</p>
                  <p className='text-center'>{d.review}</p>
                  <button className='bg-indigo-400 text-white text-lg px-4 py-2'>Mis tutoriales</button>
              </div>
            </div>
          )          
          )}
          </Slider>
      </div>
      </div>

      
      </>
    )
    
  }

  const data = [
    {
      name: `Brais Moure`,
      img: `../src/assets/Photos/dev1.png`,
      review: `Desarrollador de software freelance. Su specialidad es el desarrollo de aplicaciones iOS, Android y web.`
    },
    {
      name: `Facundo`,
      img: `../src/assets/Photos/dev2.png`,
      review: `Desarrollador de software apasionado y creador de contenido en YouTube con experiencia en tecnologías web modernas. Comprometido con compartir conocimientos y experiencias a través de tutoriales y contenido educativo.`
    },
    {
      name: `Midudev`,
      img: `../src/assets/Photos/dev3.png`,
      review: `Apasionado de la programación desde muy pequeñito. Empezó en la programación trasteando con Locomotive BASIC con un Amstrad CPC 464 que me regaló mi padre. De ahí hasta el día de hoy he tocado muchas tecnologías y lenguajes muy diferentes.`
    },
  ];

  