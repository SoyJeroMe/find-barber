import Navbar from "../../components/principals/Navbar";
import court from '../../img/courts/court.png'

export default function BarberPage() {
  return (
    <>
    <Navbar />
    <section className="bg-gray-50 text-gray-900 py-12 md:py-20">
      <div className="container max-w-5xl px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-extrabold">Estaban Sosa</h2>
              <p className="text-lg text-gray-700">Especialista en cortes de cabello y peinados de alta calidad</p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Habilidades</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1 rounded-full bg-purple-300 text-purple-900 font-semibold">Corte de cabello</div>
                  <div className="px-3 py-1 rounded-full bg-purple-300 text-purple-900 font-semibold">Peinados</div>
                  <div className="px-3 py-1 rounded-full bg-purple-300 text-purple-900 font-semibold">Afeitado</div>
                  <div className="px-3 py-1 rounded-full bg-purple-300 text-purple-900 font-semibold">Tratamientos capilares</div>
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Sobre mí</h3>
                <p className="text-gray-700">
                  Soy un barbero con más de 15 años de experiencia, apasionado por mi trabajo y dedicado a brindar un
                  servicio excepcional a cada uno de mis clientes. Me enorgullece ofrecer cortes de cabello y peinados
                  de alta calidad, utilizando técnicas y productos de vanguardia.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={court}
                alt="Trabajo de Esteban"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full aspect-square shadow-lg"
              />
              <img
                src={court}
                alt="Trabajo de Esteban"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full aspect-square shadow-lg"
              />
              <img
                src={court}
                alt="Trabajo de Esteban"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full aspect-square shadow-lg"
              />
              <img
                src={court}
                alt="Trabajo de Esteban"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full aspect-square shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
