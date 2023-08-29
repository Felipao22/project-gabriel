import { Link } from "react-router-dom";
import example from "../assets/example.jpg";
import estres from "../assets/estres.jpg"
import bienestar from "../assets/bienestar.jpg"
import claridad from "../assets/claridad.jpg"

export const SectionTwo = () => {
  return (
    <section className="min-h-screen w-full bg-dark px-2 pb-40 pt-32">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-2">
        <div className="max-w-screen-md py-10 px-6 md:mx-auto mx-4 md:p-20 border-solid border-2 border-y-cyan-50 rounded-md shadow-md shadow-white text-center">
          <h6 className="text-slate-100 md:text-xl font-bold leading-6">
            "Abraza el poder de la transformación y da el primer paso hacia una
            vida renovada. Tu sesión de Biodescodificación te espera, lista para
            desatar el cambio positivo que mereces. Hoy es el día para invertir
            en tu bienestar y descubrir el potencial ilimitado que reside dentro
            de ti."
          </h6>
        </div>
      </div>
      <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <div>
          <img
            src={claridad}
            alt="My profile"
            className="rounded-2xl mx-auto h-auto w-2/3 md:w-2/3 md:my-20 mb-20 md:mr-60 object-cover"
          />
        </div>
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-xl mb-2 md:text-2xl font-bold text-slate-100">
            Claridad Emocional:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            Experimenta una mayor comprensión de tus emociones y cómo influyen
            en tu bienestar general. Aprende a identificar y liberar bloqueos
            emocionales que puedan estar limitando tu felicidad y éxito.
          </p>
        </header>
      </div>
      <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-xl mb-2 md:text-2xl font-bold text-slate-100">
            Reducción del Estrés:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            A través de técnicas específicas de Biodescodificación, podrás
            reducir el estrés acumulado en tu cuerpo y mente, lo que puede tener
            un efecto positivo en tu salud física y mental.
          </p>
        </header>
        <div>
          <img
            src={
             estres
            }
            alt="My profile"
            className="rounded-2xl mx-auto h-auto w-80 md:w-2/3 md:my-20 mt-20 mb-20  object-cover"
          />
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
            Mejora de Relaciones:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            Descubre cómo patrones emocionales y comportamientos subconscientes
            pueden afectar tus relaciones. Al sanar y liberar estos patrones,
            puedes crear conexiones más saludables y auténticas con los demás.
          </p>
        </header>
      </div>
      <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-xl mb-2 md:text-2xl font-bold text-slate-100">
            Autoempoderamiento:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            La Biodescodificación te proporciona las herramientas para tomar el
            control de tu vida y tu bienestar. Aprenderás a reconocer tus
            propios patrones y desencadenar cambios positivos de manera
            independiente.
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
            Transformación de Hábitos:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            Identifica y cambia patrones de pensamiento y comportamientos que te
            han mantenido atascado en ciclos no deseados. Libérate de hábitos
            perjudiciales y abre espacio para nuevas formas de vivir y
            prosperar.
          </p>
        </header>
      </div>
      <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-xl mb-2 md:text-2xl font-bold text-slate-100">
            Alineación Mente-Cuerpo:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            La Biodescodificación trabaja en armonía con tu cuerpo, reconociendo
            cómo los aspectos emocionales y mentales pueden afectar tu salud
            física. Al alinear estos elementos, puedes experimentar una mayor
            vitalidad y equilibrio.
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
            Descubrimiento Personal:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            A medida que profundizas en tu interior, te embarcarás en un viaje
            de autodescubrimiento. Esto te permitirá reconocer tus dones,
            pasiones y propósito, impulsándote hacia una vida más auténtica y
            satisfactoria.
          </p>
        </header>
      </div>
      <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-xl mb-2 md:text-2xl font-bold text-slate-100">
            Superación de Bloqueos:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            Supera bloqueos emocionales arraigados que pueden haber estado
            frenando tu crecimiento personal y profesional. Libérate de
            limitaciones invisibles y abraza tu potencial completo.
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
      <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <div>
          <img
            src={bienestar}
            alt="My profile"
            className="rounded-2xl mx-auto h-auto w-2/3 md:w-2/3 md:my-20 mb-20 md:mr-60 object-cover"
          />
        </div>
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-xl mb-2 md:text-2xl font-bold text-slate-100">
            Bienestar Holístico:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            La Biodescodificación aborda todos los aspectos de tu ser: mente,
            cuerpo y espíritu. Al lograr un equilibrio integral, podrás
            disfrutar de una sensación general de bienestar y plenitud.
          </p>
        </header>
      </div>
      <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
        <header className="flex flex-col justify-center h-full px-4">
          <h6 className="text-xl mb-2 md:text-2xl font-bold text-slate-100">
            Transformación Continua:
          </h6>
          <p className="text-lg md:text-xl font-bold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            Una sola sesión de Biodescodificación puede ser el punto de partida
            para una transformación continua. A medida que practiques las
            enseñanzas y las técnicas aprendidas, podrás cultivar un cambio
            positivo a largo plazo en tu vida.
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
            Tu viaje hacia la sanación y la transformación comienza aquí.
          </h6>
          <p className="text-xl md:text-2xl font-bold text-center from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">
            Permíteme ser tu guía en este emocionante camino hacia el bienestar
            integral. ¡Conoce a Gabriel y descubre cómo juntos podemos desatar
            tu máximo potencial!
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
