import example from '../assets/example.jpg'


export const Home = () => {
  return (
    <>
    
    <main className="h-screen w-full bg-slate-500 ">
      <div className="max-w-screen-lg mx-20 flex flex-col items-center h-full px-2 md:flex-row" >
      <header className="flex flex-col justify-center h-full pt-2">
      <h3 className="text-xl sm:text-7xl font-bold text-white">Terapias de autoconocimiento</h3>
      {/* <h1 >Project Gabriel</h1> */}
      </header>
      {/* <div>
        <h3>Terapias de autoconocimiento</h3>
      </div> */}
      <div>
          <img
            src={example}
            alt="My profile"
            className="rounded-2xl mx-40 w-2/3 md:w-full object-cover"
          />
        </div>
      </div>
    </main>
        <main className="h-screen w-full bg-slate-100 ">
        <div className="max-w-screen-lg mx-auto flex justify-center items-center h-full px-2 md:flex-row" >
        <header className="flex flex-col justify-center h-full pt-2">
        <h3 className=" font-bold text-black">Tú nuevo Terapueta Emocional de Biodescodificación</h3>
        {/* <h1 >Project Gabriel</h1> */}
        </header>
        {/* <div>
          <h3>Terapias de autoconocimiento</h3>
        </div> */}
        </div>
      </main>
    </>
  )
}
