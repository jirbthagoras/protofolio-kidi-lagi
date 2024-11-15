import React from 'react';
import profile from '../assets/Asai Akira - Yofukashi no Uta2.jpeg'
const About = () => {
  return (
    <section className="p-8">
      <div className="flex flex-col items-center">
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <p className="text-lg text-center">
          Hello World! Name's Jabriel!
        </p>
      </div>

       
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                <h3 className='text-2xl font-bold mb-4 text-rose-700'>Software Engineering</h3>
                <p className='text-gray-700 mb-4'>
                    I love to develop A software, 
                </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                <h3 className='text-2xl font-bold mb-4 text-rose-700'>Backend Developing</h3>
                <p className='text-gray-700 mb-4'>
                    My main skill is Backend Developing, I do Laravel, Go, and some Bun framework like HonoJS
                </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                <h3 className='text-2xl font-bold mb-4 text-rose-700'>Android Developing</h3>
                <p className='text-gray-700 mb-4'>
                    I learn Kotlin adn Jetpack Compose recently to broad my IT skill
                </p>
            </div>
        </div>
        <div>
            <p className='text-lg text-gray-600 mt-8'>
                What? About me? So, I'm a Software Engineer and currently I do Backend Developing.
            </p>
        </div>

    </section>
  );
};

export default About;