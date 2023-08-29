import { CircleIcon, FireIcon, HoldinHeartIcon } from "../components/Icons";

export const Section = () => {
  return (
    <section className="min-h-screen w-full bg-primary px-2 pb-40 flex flex-col justify-center items-center">
      <div className="max-w-screen-lg mx-auto flex justify-center items-center h-full px-auto md:flex-row">
        <header className="flex flex-col md:justify-start h-screen pt-2 mt-16 -mb-48 md:-mb-80">
          <h3 className="text-3xl my-6 md:mx-10 md:text-4xl font-bold text-slate-100 text-center">
            Explora la esencia de la Biodescodificación:
          </h3>

          <span className="text-xl md:mx-10 font-bold text-transparent bg-gradient-to-r from-purple-500 via-pink-200 to-white bg-clip-text text-center">
            Un enfoque holístico que descifra los mensajes del cuerpo y la
            mente, brindándote las herramientas para sanar profundamente, crecer
            y prosperar.
          </span>

          <small className="text-lg mt-4 md:mx-10 md:text-xl font-bold text-slate-100 text-center ">
            Descubre cómo esta terapia única te invita a conectarte contigo
            mismo y desbloquear un potencial de bienestar inexplorado.
          </small>
          <small className="text-lg mt-4 md:mx-10 md:text-xl font-bold text-slate-100 text-center ">
            Mi compromiso contigo:
          </small>
        </header>
      </div>
      {/* <div className="flex flex-wrap mx-10 max-w-xs md:max-w-4xl justify-center md:justify-center -mt-12">
        <ul className="w-full md:w-auto">
          <li>
            <div className="flex items-center gap-3 mb-4 whitespace-pre-line">
              <FireIcon />
              <span className="text-slate-100">
                Exploración Profunda: Te guiaré en un viaje hacia el interior de
                ti mismo, ayudándote a descifrar los mensajes ocultos en tu
                cuerpo y mente. Juntos, descubriremos las raíces de tus desafíos
                y patrones, allanando el camino para la sanación genuina.
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3 mb-4">
              <CircleIcon />
              <span className="text-slate-100">
                Transformación Auténtica: A través de la Biodescodificación, te
                apoyaré en la transformación de tus patrones limitantes y cargas
                emocionales. Liberarte de estos bloqueos te permitirá
                experimentar una nueva libertad emocional y mental, abriendo
                espacio para el crecimiento personal y la realización.
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center md:gap-3 gap-4 mb-4">
              <HoldinHeartIcon />
              <span className="text-slate-100">
                Empoderamiento Duradero: Mi enfoque va más allá de una simple
                sesión; te proporcionaré las herramientas y la comprensión
                necesarias para que sigas sanando y creciendo por ti mismo. Al
                asumir el control de tu bienestar, te empoderarás para crear una
                vida llena de significado, equilibrio y vitalidad.
              </span>
            </div>
          </li>
        </ul> */}
        <div className="flex flex-wrap mx-6 md:max-w-4xl justify-center">
        <ul className="w-full md:w-auto">
          <li className="w-full md:w-auto flex items-center gap-2 mb-4 text-justify whitespace-pre-line">
            <FireIcon size={100} className="w-48 " />
            <span className="text-slate-100 mx-2 text-justify  font-semibold ">
              Exploración Profunda: Te guiaré en un viaje hacia el interior de
              ti mismo, ayudándote a descifrar los mensajes ocultos en tu
              cuerpo y mente. Juntos, descubriremos las raíces de tus desafíos
              y patrones, allanando el camino para la sanación genuina.
            </span>
          </li>
          <li className="w-full md:w-auto flex items-center gap-2 mb-4">
            <CircleIcon  size={100} className="w-48 "/>
            <span className="text-slate-100  text-justify  font-semibold mx-2 md:ml-4 xl:ml-[1.5rem]">
              Transformación Auténtica: A través de la Biodescodificación, te
              apoyaré en la transformación de tus patrones limitantes y cargas
              emocionales. Liberarte de estos bloqueos te permitirá
              experimentar una nueva libertad emocional y mental, abriendo
              espacio para el crecimiento personal y la realización.
            </span>
          </li>
          <li className="w-full md:w-auto flex items-center md:gap-3 gap-3 mb-4">
            <HoldinHeartIcon  size={100} className="w-48 "/>
            <span className="text-slate-100  text-justify  font-semibold mx-2 md:ml-4 xl:ml-[1.5rem]">
              Empoderamiento Duradero: Mi enfoque va más allá de una simple
              sesión; te proporcionaré las herramientas y la comprensión
              necesarias para que sigas sanando y creciendo por ti mismo. Al
              asumir el control de tu bienestar, te empoderarás para crear una
              vida llena de significado, equilibrio y vitalidad.
            </span>
          </li>
        </ul>
        <span className="text-lg mt-20  md:mx-20 md:text-xl font-bold text-slate-100 text-center ">
          Juntos, exploraremos las profundidades de tu ser y desencadenaremos un
          potencial de transformación que te llevará hacia una vida más plena y
          auténtica.
        </span>
      </div>
      <div className="max-w-screen-md md:mx-auto mx-6 mt-20 p-6 md:p-20 border-solid border-2 border-y-cyan-50 rounded-md shadow-md shadow-white text-center">
        <p className="text-slate-200 md:text-xl font-bold leading-6">
          Hay una filosofía japonesa que dice: Lo único que es más perfecto que
          lo perfecto es aquello que se recupera después de romperse. Un ser
          humano reparado es mucho más bonito que un ser humano que nunca ha
          sufrido.
        </p>
      </div>
    </section>
  );
};
