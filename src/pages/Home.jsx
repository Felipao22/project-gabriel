import profile1 from "../assets/Profile-1.webp";
import { Link } from "react-scroll";
import { Terapeuta } from "../components/Terapeuta";
import { Section } from "../components/Section";
import { SectionTwo } from "../components/SectionTwo";
import { Testimonios } from "../components/Testimonios";

export const Home = () => {
  return (
    <>
      <main
        name="home"
        className="min-h-screen w-full font-title bg-gradient-to-tr from-custom-gradient-35 via-custom-gradient-51 to-custom-gradient-0"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col items-center h-full px-2 md:flex-row py-6">
          <header className="flex flex-col justify-center h-full px-4">
            <h6 className="text-2xl mb-2 md:text-4xl md:mr-40 font-semibold text-slate-100">
            Emprende un viaje de autoconocimiento y sanación profunda a través de la Biodescodificación
            </h6>
            <span className="text-3xl md:text-5xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Transforma tu vida desde adentro hacia afuera
            </span>

            <div className="py-8">
              <Link
                to="descubre"
                smooth
                duration={500}
                className="rounded-full leading-4 text-center text-slate-100 bg-violet-800 p-4 uppercase font-bold cursor-pointer hover:bg-violet-500"
              >
                Descubre a tu terapeuta
              </Link>
            </div>
          </header>
          <div>
            <img
              src={profile1}
              alt="My profile"
              className="rounded-2xl mx-auto h-auto w-1/2 md:w-4/6 md:my-auto md:pt-6 mb-20 md:mx-auto xl:ml-48 object-cover"
            />
          </div>
        </div>
      </main>
      <Terapeuta />
     <Section />
     <SectionTwo />
    <Testimonios />
    </>
  );
};
