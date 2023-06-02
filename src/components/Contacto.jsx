

export const Contacto = () => {
  // return (
  //   <div className='flex justify-center'>
  //     <form className="form-control">
  //       Escribime para cualquier tipo de duda
  //       <label className="label">
  //   <span className="label-text">Tú nombre</span>
  // </label>
  // <label className="input-group">
  //   <span>Nombre</span>
  //   <input type="text" placeholder="Gabriel Furik" className="input input-bordered" />
  // </label>
        
  // <label className="label">
  //   <span className="label-text">Tú email</span>
  // </label>
  // <label className="input-group">
  //   <span>Email</span>
  //   <input type="text" placeholder="info@site.com" className="input input-bordered" />
  // </label>

  // <label className="label">
  //   <span className="label-text">Tú telefono</span>
  // </label>
  // <label className="input-group">
  //   <span>Email</span>
  //   <input type="text" placeholder="info@site.com" className="input input-bordered" />
  // </label>
  //       <textarea placeholder="Tu mensaje" type="text" />
  //     </form>
  //   </div>
  // )
  return(
<>

  <section className="bg-gradient-to-tr from-custom-gradient-35 via-custom-gradient-51 to-custom-gradient-0">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contacto</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Escríbeme para cualquier tipo de duda.</p>
      <form action="#" className="space-y-8">
          <div>
              <label  className="block mb-2 text-sm font-medium text-white">Tú nombre</label>
              <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Gabriel Furik" required />
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-white">Tú email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@site.com" required />
          </div>
          <div>
              <label className="block mb-2 text-sm font-medium text-white">Tú número</label>
              <input type="number" inputMode="numeric" pattern="[0-9]+" id="tel" name="number" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border appearance-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="3514553749" required />
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-white">Tú mensaje</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deje su mensaje..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-secondary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar mensaje</button>
      </form>
  </div>
</section>
</>
  )
}
