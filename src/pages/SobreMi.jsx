import Profile2 from "../assets/Profile-2-removebg.webp";
import { Link } from "react-router-dom";

export const SobreMi = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-primary px-8 pt-12 md:py-10">
        {/* Imagen en Dispositivo Móvil */}
        <div className="block xl:hidden">
          <h4 className="text-slate-200 md:text-4xl text-2xl font-bold leading-6 pb-10 text-center">
            ¡Hola, soy Gabriel Furik!
          </h4>
          <img
            src={Profile2}
            alt="My profile"
            className="mx-auto h-auto w-5/6 md:w-2/5 xl:w-5/6 mb-4 object-cover"
          />
          <div className="max-w-screen-sm py-10 px-6 md:mx-auto mx-4 md:px-4 border-solid border-2 border-y-cyan-50 text-center m-20">
            <span className="text-slate-200 md:text-xl font-bold leading-6">
              Soy especialista en Terapia de Biodescodificación
            </span>
          </div>
          <span className="text-slate-200 md:text-xl text-justify font-bold leading-6 pt-20">
            Originario de Posadas, Misiones, Argentina, y actualmente
            establecido en la vibrante Córdoba Capital. Desde mi infancia,
            siempre sentí una fuerte inclinación hacia escuchar y aconsejar a
            las personas, impulsado por el deseo genuino de proporcionar
            herramientas significativas para su bienestar.
          </span>
        </div>

        <div className="max-w-screen-xl md:ml-6 py-20 flex flex-col h-full px-2 xl:flex-row">
          <div className="hidden xl:flex xl:flex-col justify-center h-full px-4 w-1/2">
            <h4 className="text-slate-200 md:text-4xl font-bold leading-6 pb-10 text-center">
              ¡Hola, soy Gabriel Furik!
            </h4>
            <div className="pt-6">

            <div className="max-w-screen-xl py-10 px-6 border-solid border-2 border-y-cyan-50 text-center">
              <span className="text-slate-200 md:text-2xl font-bold leading-6 md:px-4">
                Soy especialista en Terapia de Biodescodificación
              </span>
            </div>
            </div>
            <span className="text-slate-200 md:text-xl md:text-center leading-6 pt-16 mb-4">
              Originario de Posadas, Misiones, Argentina, y actualmente
              establecido en la vibrante Córdoba Capital. Desde mi infancia,
              siempre sentí una fuerte inclinación hacia escuchar y aconsejar a
              las personas, impulsado por el deseo genuino de proporcionar
              herramientas significativas para su bienestar.
            </span>
          </div>

          {/* Parte Derecha: Imagen en pantalla grande */}
          <div className="hidden xl:flex">
            <img
              src={Profile2}
              alt="My profile"
              className="mx-auto h-auto w-4/6 md:w-1/3 xl:w-auto pt-2 md:-mt-16 mb-20 xl:ml-56 object-cover"
            />
          </div>
        </div>
      </section>
      <main className="h-screen w-full bg-neutral font-title">
        <div className="max-w-screen-lg mx-auto flex justify-center items-center h-full px-auto md:flex-row">
          <header className="flex flex-col justify-center h-full pt-2 my-96">
            <h3 className="text-xl my-6 mx-6 md:text-2xl font-bold text-customBlack text-start xl:text-center">
              Mi camino me llevó a servir en la Fuerza Aérea durante 8 años,
              donde creí que contribuir a mi país era una forma de mejorar el
              mundo.
            </h3>

            <span className="text-2xl mx-6 md:text-4xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-starty xl:text-center text-transparent ">
              Sin embargo, al adentrarme en el mundo holístico, descubrí una
              verdad profunda: la sanación auténtica y la transformación nacen
              desde adentro.
            </span>

            <small className="text-xl my-10 mx-6 md:text-2xl text-start xl:text-center font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
              Mi vida cambió radicalmente cuando experimenté mi primera sesión
              de biodescodificación. En ese momento, encontré mi verdadera
              esencia y descubrí mi pasión por comprender la mente humana en su
              plenitud.
            </small>
          </header>
        </div>
      </main>
      <main className="min-h-screen w-full bg-dark font-title">
        <div className="max-w-screen-lg mx-auto flex justify-center items-center h-full px-auto md:flex-row">
          <header className="flex flex-col justify-center h-full pt-2 my-20 xl:my-40">
            <h3 className="text-2xl my-6 mx-6 md:text-4xl font-bold text-slate-200 text-start xl:text-center">
              A lo largo de mi viaje, me he dedicado a desarrollar diversas
              técnicas y herramientas para potenciar la sanación emocional.
            </h3>

            <span className="text-2xl mx-6 md:text-4xl font-bold xl:text-center text-start from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
              Mi búsqueda de crecimiento personal, equilibrio y abundancia es
              una constante. Vivo para desentrañar cada capa de mi ser y mejorar
              constantemente.
            </span>

            <small className="text-2xl my-10 mx-6 md:text-4xl text-start xl:text-center font-bold  from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              Mi objetivo es transmitir estos conocimientos y descubrimientos
              para ayudarte a encontrar tu propia versión más auténtica y vivir
              en plenitud.
            </small>
          </header>
        </div>
      </main>
      <main className="min-h-screen w-full bg-gradient-to-tr from-custom-gradient-35 via-custom-gradient-51 to-custom-gradient-0 font-title">
        <div className="max-w-screen-lg mx-auto flex justify-center items-center h-full px-auto md:flex-row">
          <header className="flex flex-col justify-center h-full pt-2 my-20 xl:my-40">
            <h3 className="text-2xl my-6 mx-6 md:text-4xl font-bold text-slate-200 text-start xl:text-center">
              Estoy comprometido a acompañarte en tu viaje de sanación y
              transformación.
            </h3>

            <p className="text-2xl mx-6 md:text-4xl font-bold xl:text-center text-start from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
              Mi pasión es guiarte hacia la recuperación de tu salud física,
              mental y espiritual. Juntos exploraremos tus desafíos, liberaremos
              bloqueos y desencadenaremos el potencial que reside en ti.
            </p>

            <p className="text-2xl my-10 mx-6 md:text-4xl text-start xl:text-center font-bold text-slate-200">
              Permíteme ser tu compañero en este camino hacia la plenitud y la
              realización personal.
            </p>
          <div className="pt-8 flex justify-center">
            <Link
              to="/reservar"
              className="group rounded-full leading-4 text-center text-slate-200 bg-violet-800 p-4 uppercase font-bold cursor-pointer hover:bg-violet-500"
            >
              Reservar
            </Link>
          </div>
          </header>
        </div>
      </main>
    </>
  );
};
