export const Testimonios = () => {
    return(
        <section className="min-h-screen w-full bg-neutral px-2 pb-40 pt-32">
        <h1 className="text-3xl mb-20 md:mx-10 md:text-4xl font-bold text-customBlack text-center">
          Casos de éxitos
        </h1>
        <div className="md:flex md:flex-row px-2">
      
        <div className="md:max-w-4xl md:m-auto p-4 md:flex md:flex-row md:justify-between md:content-start gap-10 flex flex-col items-center">
          <div className="w-full flex-1 border-2 border-solid rounded-xl p-3 bg-white shadow-custom transition-all hover:scale-105">
            <img className="block m-auto w-24 h-24 object-cover rounded-full mb-4 border-2 border-solid" src="https://images.unsplash.com/photo-1684178315101-454993c20fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ5Njc5MzJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Avatar 1" />
            <h3 className="inline box-decoration-clone bg-gradient-to-r from-yellow-200 to-transparent text-customBlack text-lg font-title">These treats are real tail-waggers</h3>
            <p className="text-lg font-testimonial text-customBlack">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, dolor quidem sint repellendus recusandae qui vitae! </p>
            <span className="block mt-4 italic text-sm text-customBlack">Lily R.</span>
          </div>
        </div>
        <div className="md:max-w-4xl md:m-auto p-4 md:flex md:flex-row md:justify-between md:content-start gap-10 flex flex-col items-center">
          <div className="w-full flex-1 border-2 border-solid rounded-xl p-3 bg-white shadow-custom transition-all hover:scale-105">
            <img className="block m-auto w-24 h-24 object-cover rounded-full mb-4 border-2 border-solid" src="https://images.unsplash.com/photo-1682704109522-56a6fbc1962e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ5Njc5MzJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Avatar 2" />
            <h3 className="inline box-decoration-clone bg-gradient-to-r from-yellow-200 to-transparent text-customBlack text-lg font-title">These treats are real tail-waggers</h3>
            <p className="text-lg font-testimonial"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, dolor quidem sint repellendus recusandae qui vitae!</p>
            <span className="block mt-4 italic text-sm text-customBlack">Albert Z.</span>
          </div>
        </div>
        <div className="md:max-w-4xl md:m-auto p-4 md:flex md:flex-row md:justify-between md:content-start gap-10 flex flex-col items-center">
          <div className="w-full flex-1 border-2 border-solid rounded-xl p-3 bg-white shadow-custom transition-all hover:scale-105">
            <img className="block m-auto w-24 h-24 object-cover rounded-full mb-4 border-2 border-solid" src="https://images.unsplash.com/photo-1615473967657-9dc21773daa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ5NjgxNDF8&ixlib=rb-4.0.3&q=80&w=400" alt="Avatar 3" />
            <h3 className="inline box-decoration-clone bg-gradient-to-r from-yellow-200 to-transparent text-customBlack text-lg font-title">These treats are real tail-waggers</h3>
            <p className="text-lg font-testimonial"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, dolor quidem sint repellendus recusandae qui vitae! </p>
            <span className="block mt-4 italic text-sm text-customBlack">Jennifer T.</span>
          </div>
        </div>
        </div>
      </section>
    )
}