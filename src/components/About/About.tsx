import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
    return (
        <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
            <div className="flex flex-col items-center max-w-xl mb-7" id="about">
                <h4 className="text-secondary">Sobre nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Más de 1.000 viviendas para vender y comprar en España</h2>
                <p className="mb-10 mt-7">Nuestra plataforma inmobiliaria se enorgullece de ofrecer a nuestros clientes una amplia gama de opciones para comprar y vender propiedades en toda España. Con más de 1.000 viviendas disponibles, desde acogedores apartamentos en el corazón de la ciudad hasta espaciosas casas rurales en pintorescos pueblos, estamos comprometidos a ayudar a encontrar el hogar perfecto para cada persona. Nuestra dedicación a la excelencia en el servicio al cliente y nuestro profundo conocimiento del mercado inmobiliario español nos distingue como líderes en el sector. Ya sea que estés buscando tu primer hogar, una inversión inmobiliaria o un retiro tranquilo en la costa, estamos aquí para hacer realidad tus sueños de propiedad en España.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">Cargar más</button>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/assets/house.jpeg" alt="About" width={350} height={450} className="w-auto h-auto" priority/>
            </div>
        </Transition>
    )
}
