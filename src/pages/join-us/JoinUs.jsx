import Navbar from '../../components/principals/Navbar'
import joinUs from '../../img/join-us/joinUs.jpg'

function JoinUs() {
  return (
    <>
      <Navbar />
      <div className='flex flex-wrap h-screen'>
        <article className='w-full md:w-1/2 h-full'>
          <img className='w-full h-screen object-cover' src={joinUs} alt="Join Us" />
        </article>
        <section className='w-full md:w-1/2 flex items-center justify-center p-4 h-full'>
          <div>
            <article className='mb-4 items-center justify-center '>
              <p className='text-2xl'>
                Si tienes ideas innovadoras o habilidades que puedan mejorar
                nuestra app, nos encantaría saber de ti! Envía una solicitud y
                comparte tu talento con nosotros para llevar nuestra
                plataforma al siguiente nivel.
              </p>
            </article>
            <button className='bg-purple-800 text-white px-4 py-2 rounded m-auto items-center justify-center flex'>Enviar Solicitud</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default JoinUs
