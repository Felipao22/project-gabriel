import example from "../assets/example.jpg";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <>
      <main
        name="home"
        className="h-screen w-full bg-gradient-to-tr from-custom-gradient-35 via-custom-gradient-51 to-custom-gradient-0"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-2 md:flex-row">
          <header className="flex flex-col justify-center h-full px-4">
            <h6 className="text-2xl mb-2 md:text-5xl md:mr-40 font-bold text-white">
              Terapias de autoconocimiento
            </h6>
            <span className="text-3xl md:text-6xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              Tú ya sabías que las casualidades no existen
            </span>

            <div className="pt-8">
              <Link
                to="descubre"
                smooth
                duration={500}
                className="group rounded-full leading-4 text-center text-white bg-violet-800 p-4 uppercase font-bold cursor-pointer hover:bg-violet-500"
              >
                Descubre a tu terapeuta
              </Link>
            </div>
          </header>
          <div>
            <img
              src={example}
              alt="My profile"
              className="rounded-2xl mx-auto h-auto w-1/2 md:w-auto md:my-auto mb-20 md:mx-auto xl:ml-40 object-cover"
            />
          </div>
        </div>
      </main>
      <main name="descubre" className="h-screen w-full bg-neutral">
        <div className="max-w-screen-lg mx-auto flex justify-center items-center h-full px-auto md:flex-row">
          <header className="flex flex-col justify-center h-full pt-2 my-80">
            <h3 className="text-3xl my-6 mx-10 md:text-4xl font-bold text-black text-center">
              Tú nuevo Terapueta Emocional de Biodescodificación
            </h3>
            
              {/* <span className="w-96 h-1 bg-stone-950 my-20 mx-20 md:w-[1100px]"></span> */}
          <span className="text-2xl  mx-10 md:text-2xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-center text-transparent ">
            Lidera tus Estados de Ánimo, Conectando Cuerpo, Mente y Alma
          </span>
          {/* <span className="w-96 h-1 bg-stone-950 my-8 mx-20 md:w-[1100px]"></span> */}
          
            
          <small className="text-xl my-10 mx-10 md:text-1xl font-bold text-black text-center ">
          Crea de una vez, la vida que Mereces y Cambia Todo lo que no te gusta de ti mediante la mejor técnica de Autoconocimiento Emocional y Corporal.
          </small>
          </header>
        </div>
      </main>
    </>
  );
};
