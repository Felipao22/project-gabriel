import { Link } from "react-router-dom";
import example from "../assets/example.jpg";

export const SectionTwo = () => {
  return (
    <section className="min-h-screen w-full bg-dark px-2 pb-40 pt-32">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-2">
        <div className="max-w-screen-md py-10 px-6 md:mx-auto mx-4 md:p-20 border-solid border-2 border-y-cyan-50 rounded-md shadow-md shadow-white text-center">
          <h6 className="text-slate-100 md:text-xl font-bold leading-6">
            El mundo no funciona como nos han dicho que funciona.
          </h6>
        </div>
      </div>
      <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <div>
          <img
            src={example}
            alt="My profile"
            className="rounded-2xl mx-auto h-auto w-1/2 md:w-2/3 md:my-20 mb-20 md:mr-60 object-cover"
          />
        </div>
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-xl mb-2 md:text-2xl font-bold text-slate-100">
            Funciona aún mejor
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            Acompaño a las personas diferentes como tú, a generar su propio
            bienestar y plenitud, mediante sesiones privadas y cursos
            científicamente diseñados para sanar.
          </p>
        </header>
      </div>
      <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-xl mb-2 md:text-2xl font-bold text-slate-100">
            Te acompaño a leer lo que tu corazón grita con las mejores técnicas
            de autoconocimiento.
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            Enseño a las personas espirituales e inconformistas la innegable
            relación entre mente, emociones y enfermedades.
          </p>
        </header>
        <div>
          <img
            src={
              "https://www.ngenespanol.com/wp-content/uploads/2023/03/que-es-una-galaxia-y-como-se-forman-estas-colonias-espaciales.jpg"
            }
            alt="My profile"
            className="rounded-2xl mx-auto h-auto w-auto md:w-2/3 md:my-20 mt-20 mb-20  object-cover"
          />
        </div>
      </div>
      <div className="max-w-screen-md md:mx-auto py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-2xl mb-2 md:text-4xl font-bold text-slate-100 text-center">
            Trabajamos las emociones más profundas
          </h6>
          <p className="text-xl md:text-2xl font-bold text-center from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            Mi objetivo es que resuelvas todos y cada uno de tus conflictos y
            asuntos pendientes, generes tú tu propia felicidad para liberar,
            transitar y sanar las emociones y los recuerdos sumergidos en tu
            subconsciente.
          </p>
          <div className="pt-8 flex justify-center">
            <Link
              to="/sobre-mi"
              className="group rounded-full leading-4 text-center text-slate-100 bg-violet-800 p-4 uppercase font-bold cursor-pointer hover:bg-violet-500"
            >
              conoce a Gabi
            </Link>
          </div>
        </header>
      </div>
    </section>
  );
};
