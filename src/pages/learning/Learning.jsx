import React from 'react'
import Navbar from '../../components/principals/Navbar'
import learningVideo from '../../media/learning/learning.mp4'
import { IoIosArrowDropdown } from 'react-icons/io'
import courses from '../../data/courses'

function Learning() {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      const yOffset = -100; // Ajuste para mostrar solo el título y las primeras tarjetas
      const y = coursesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <video
          className="w-full max-h-[530px] object-cover"
          autoPlay
          loop
          muted
          src={learningVideo}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div onClick={scrollToCourses}>
        <IoIosArrowDropdown className="flex m-auto mt-2 mb-2 size-32 cursor-pointer" />
      </div>
      <section id="courses-section" className='p-9'>
        <article>
          <h1 className="text-4xl text-center mb-8">
            Cursos creados por la comunidad
          </h1>
        </article>
        <section className="flex flex-wrap justify-center">
          {courses.map((course) => (
            <div key={course.id} className="max-w-xs m-4 bg-white rounded-lg shadow-lg">
              <img src={course.imgSrc} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-700">{course.description}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  )
}

export default Learning
