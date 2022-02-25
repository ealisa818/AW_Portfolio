import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Alisa.
            <br className="hidden lg:inline-block" />I love meeting new people, collaborating and, of course, building new apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          After teaching English to speakers of other languages for over 20 years, I decided to make a career change to Web Development. Before teaching, I earned a degree in Actuarial Science from the University of Georgia. I am looking for an opportunity where I can use both my analytical thinking and problem solving skills. In addition to teaching, I have always strived to take on leadership roles in the schools where I taught.  These roles have included acting as the liaison between the teachers and the school management, as well as being the district wide department leader. In Germany, together with a business partner, I started and ran Hamburg Language Lounge, a language school combined with a bar/café. I love learning about new cultures and studying languages. I am fluent in German and speak conversational French and Thai.
       
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}


export default function About() {}