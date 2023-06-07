import { CircleIcon, FireIcon, HoldinHeartIcon } from "../components/Icons";

export const Section = () => {
  return (
    <section className="min-h-screen w-full bg-primary px-2 pb-40">
      <div className="max-w-screen-lg mx-auto flex justify-center items-center h-full px-auto md:flex-row">
        <header className="flex flex-col md:justify-start h-screen pt-2 mt-40 -mb-48 md:-mb-80">
          <h3 className="text-3xl my-6 mx-10 md:text-4xl font-bold text-white text-center">
            Sólo para personas responsables con coraje.
          </h3>

          <span className="text-xl mx-10 font-bold text-transparent bg-gradient-to-r from-purple-500 via-pink-200 to-white bg-clip-text text-center">
            Si tienes claro todo lo que vales pero la información que sabes y lo
            que haces no están atrayendo lo que realmente quieres, estoy aquí
            para ti.
          </span>

          <small className="text-xl my-10 mx-10 md:text-1xl font-bold text-white text-center ">
            Soy Gabriel, y me da dentera el “porque sí”, “lo normal” y “lo
            establecido”. Vamos juntas a:
          </small>
        </header>
      </div>
      <div className="flex flex-wrap mx-10 md:mx-20 justify-start md:justify-center -mt-40 ">
        <ul>
          <li>
            <div className="flex items-center gap-3 mb-4">
              <FireIcon className="" />
              <span className="text-white">
                Pulir tu personalidad y sacar lo mejor de ti misma.
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3 mb-4">
              <CircleIcon className="" />
              <span className="text-white">
                Dejar atrás todo lo que no quieres de tu antigua vida.
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center md:gap-3 gap-4 mb-4">
              <HoldinHeartIcon className="" />
              <span className="text-white">
                Convertirte en la fuente irrefrenable de amor, magia y luz que
                tú eres.
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="max-w-screen-md md:mx-auto mx-6 mt-20 p-6 md:p-20 border-solid border-2 border-y-cyan-50 rounded-md shadow-md shadow-white text-center">
        <p className="text-white md:text-xl font-bold leading-6">
          Hay una filosofía japonesa que dice: Lo único que es más perfecto que
          lo perfecto es aquello que se recupera después de romperse. Un ser
          humano reparado es mucho más bonito que un ser humano que nunca ha
          sufrido.
        </p>
      </div>
    </section>
  );
};
