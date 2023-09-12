

export const Cards = () => {
        const cardslItems = [
          {
            title: "Exploración Profunda",
            text: `Te guiaré en un viaje hacia el interior de
            ti mismo, ayudándote a descifrar los mensajes ocultos en tu
            cuerpo y mente. Juntos, descubriremos las raíces de tus desafíos
            y patrones, allanando el camino para la sanación genuina.`,
          },
          {
            title: "Transformación Auténtica",
            text: `A través de la Biodescodificación, te
            apoyaré en la transformación de tus patrones limitantes y cargas
            emocionales. Liberarte de estos bloqueos te permitirá
            experimentar una nueva libertad emocional y mental, abriendo
            espacio para el crecimiento personal y la realización.`,
          },
          {
            title: "Empoderamiento Duradero",
            text: `Mi enfoque va más allá de una simple
            sesión; te proporcionaré las herramientas y la comprensión
            necesarias para que sigas sanando y creciendo por ti mismo. Al
            asumir el control de tu bienestar, te empoderarás para crear una
            vida llena de significado, equilibrio y vitalidad.`,
          },
        ];


    //   return (
    //     <div className="carousel carousel-center rounded-box gap-4">
    //     {carouselItems.map((text, index) => (
    //       <div className="carousel-item p-4" key={index}>
    //         <div className="bg-neutral text-center rounded-lg shadow-md p-4 w-96 h-auto ">
    //           <p className="text-xl font-bold text-justify from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">{text}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   );

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:mx-40">
          {cardslItems.map((item, index) => (
            <div key={index} className="card bg-dark shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                {/* <p className="font-card text-start text-lg font-extrabold from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-gradient-to-r bg-clip-text text-transparent">{item.text}</p> */}
                <p className="text-start text-lg font-medium from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      );

}