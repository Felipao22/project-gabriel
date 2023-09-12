import Profile2 from "../assets/Profile-2-removebg-preview.png";
export const SobreMi = () => {
  return (
    // <main className="min-h-screen w-full bg-primary px-10 pb-40 pt-20">
    //   <section className="max-w-screen-xl mx-6 flex flex-col items-center h-full px-2 md:flex-row">
    //     <div className="flex flex-col justify-center h-full px-4">
    //       <h4 className="text-slate-100 md:text-xl font-bold leading-6 pb-10 text-center">Mi nombre es Gabriel Furik</h4>
    //     <div className="max-w-screen-xl py-10 px-6 md:mx-auto mx-4 md:px-40 border-solid border-2 border-y-cyan-50 text-center">
    //       <span className="text-slate-100 md:text-xl font-bold leading-6">
    //         Soy especialista en Terapia de Biodescodificación
    //       </span>
    //     </div>
    //     </div>
    //     <div>
    //         <img
    //           src={example}
    //           alt="My profile"
    //           className="rounded-2xl mx-auto h-auto w-1/2 md:w-1/2 md:my-auto mb-20 md:mr-2 object-cover"
    //         />
    //       </div>
    //   </section>
    // </main>
    <section className="min-h-screen w-full bg-primary px-2 pb-40 pt-12 md:py-10">
    <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col h-full px-2 xl:flex-row">
      <div className="flex flex-col justify-center h-full px-4">
           <h4 className="text-slate-100 md:text-xl font-bold leading-6 pb-10 text-center">¡Hola, soy Gabriel Furik!</h4>
         <div className="max-w-screen-xl py-10 px-6 md:mx-auto mx-4 md:px-4 border-solid border-2 border-y-cyan-50 text-center">
           <span className="text-slate-100 md:text-xl font-bold leading-6">
             Soy especialista en Terapia de Biodescodificación
           </span>
         </div>
           <h3 className="text-slate-100 md:text-xl font-bold leading-6 pt-20 mb-4">
            También tengo conocimientos en las ramas de:
           </h3>
           <ul className="text-slate-100 list-disc mb-20 px-6">
            <li>Terapias</li>
            <li>Terapias</li>
            <li>Terapias</li>
            <li>Terapias</li>
            <li>Terapias</li>
            <li>Terapias</li>
           </ul>
         </div>
      <div>
        <img
          src={Profile2}
          alt="My profile"
          className=" mx-auto h-auto w-4/6 md:w-1/3 xl:w-5/6 pt-2 md:-mt-16 mb-20 2xl:ml-36 object-cover"
        />
      </div>
     
    </div>
    {/* <div className="max-w-screen-xl md:ml-32 py-20 flex flex-col items-center h-full px-2 md:flex-row">
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
      </header>
    </div> */}
  </section>
  )
}
