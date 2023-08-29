export const Terapeuta = () => {
  return (
    <main name="descubre" className="h-screen w-full bg-neutral">
      <div className="max-w-screen-lg mx-auto flex justify-center items-center h-full px-auto md:flex-row">
        <header className="flex flex-col justify-center h-full pt-2 my-80">
          <h3 className="text-3xl my-6 mx-10 md:text-4xl font-bold text-customBlack text-center">
            Imagina liberarte de cargas emocionales, transformar patrones
            limitantes y abrazar una vida plena a través de la
            Biodescodificación.
          </h3>

          {/* <span className="w-96 h-1 bg-stone-950 my-20 mx-20 md:w-[1100px]"></span> */}
          <span className="text-2xl  mx-10 md:text-2xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-center text-transparent ">
          Descubre cómo una sola sesión puede desencadenar
            un impacto duradero en tu bienestar físico y emocional.
          </span>
          {/* <span className="w-96 h-1 bg-stone-950 my-8 mx-20 md:w-[1100px]"></span> */}

          <small className="text-xl my-10 mx-10 md:text-2xl font-bold text-customBlack text-center ">
          ¡Tu camino
            hacia la liberación y el empoderamiento comienza aquí!
          </small>
        </header>
      </div>
    </main>
  );
};
