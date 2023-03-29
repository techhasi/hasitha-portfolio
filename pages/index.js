import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMenu
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import hasitha from "../public/hasitha.png";
import softskills from "../public/softskills.jpg";
import programming from "../public/programming.jpg";
import interests from "../public/interests.jpg";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.jpg";
import web3 from "../public/web3.png";
import web4 from "../public/web4.jpg";
import web5 from "../public/web5.jpg";
import web6 from "../public/web6.png";
import emailjs from 'emailjs-com';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [navbarOpen, setNavbarOpen] = useState(false);

  const aboutmeScroll = () => {
    const aboutme = document.getElementById('aboutme');
    if (aboutme) {
      aboutme.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const skillsScroll = () => {
    const skills = document.getElementById('skills');
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const projectsScroll = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const contactmeScroll = () => {
    const contactme = document.getElementById('contactme');
    if (contactme) {
      contactme.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email using EmailJS
    emailjs.send('service_znoxmtb', 'template_y88s2kc', { name, email, message }, '2iioxDHH4IXSFu_Ts')
      .then((response) => {
        alert('Email sent successfully!');
        console.log('Email sent successfully!', response.status, response.text);
      }, (error) => {
        console.error('Email failed to send:', error);
        alert(' Error', error)
      });
  };

  return (
    <div className={darkMode ? "" : "dark"} >
      <Head>
        <title>Hasitha Wimalasooriya Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/thlogo.png" />
      </Head>
      <main className=" bg-white dark:bg-gray-900 px-10 lg:px-40">
        <section className="min-h-screen">
        <nav className="relative flex flex-wrap items-center justify-end px-2 py-6 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-end">
          <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-end">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <AiOutlineMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item dark:text-white text-black">
                <a
                  className="cursor-pointer px-10 py-2 flex items-center text-md font-semibold uppercase leading-snug  hover:opacity-75 "
                  onClick={aboutmeScroll}
                >
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="cursor-pointer px-10 py-2 flex items-center text-md font-semibold uppercase leading-snug dark:text-white text-black hover:opacity-75"
                  onClick={skillsScroll}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="cursor-pointer px-10 py-2 flex items-center text-md font-semibold uppercase leading-snug dark:text-white text-black hover:opacity-75"
                  onClick={projectsScroll}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="cursor-pointer px-10 py-2 flex items-center text-md font-semibold uppercase leading-snug dark:text-white text-black hover:opacity-75"
                  onClick={contactmeScroll}
                >
                  Contact me
                </a>
              </li>
              <li className="nav-item pt-2">
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-xl ml-10 dark:text-white text-black "
                  />
                </li>
            </ul>
          </div>
        </div>
      </nav>
              {/**/}
            
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 dark:text-white font-medium md:text-6xl">
              Hi, I am
            </h2>
            <h3 className="text-2xl py-2 text-teal-600 md:text-3xl font-semibold">
              Hasitha Wimalasooriya
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Software Engineering undergraduate providing services for programming and design content
              needs. Join me down below and let&apos;s get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a 
                href="https://twitter.com/tech_hasi"
                className="scale-100 hover:scale-125 ease-in duration-200"  >
                <AiFillTwitterCircle />
              </a>
              <a 
                href="https://www.linkedin.com/in/hasitha-wimalasooriya/"
                className="scale-100 hover:scale-125 ease-in duration-200"  >
                <AiFillLinkedin />
              </a>
              <a 
                href="https://github.com/techhasi"
                className="scale-100 hover:scale-125 ease-in duration-200"  >  
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 shadow-lg">
              <Image src={hasitha} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 
              id="aboutme"
              className="text-3xl py-1 dark:text-white mt-8 ">About me</h3>
            <p className="text-md text-justify py-2 leading-8 text-gray-800 dark:text-gray-200">
            My name is Hasitha Wimalasooriya, an undergraduate student of Software Engineering at IIT, 
            passionate about Front-end and Back-end development. As a highly motivated and dedicated undergraduate, 
            I have always been driven to achieve my goals. I believe that consistency is key to success, 
            and I take pride in my ability to code, remain focused, and be committed to my work.
            <br /> <br />
            Please do not hesitate to contact me if you require web-related support. I&apos;m eager to pursue jobs where I can 
            contribute, learn, and grow. 
            </p>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3
              id="skills" 
              className="text-3xl py-1 dark:text-white mt-10 ">Skills</h3> 
          </div>         
          <div className=" grid grid-rows-1">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 h-auto">
              <Image src={programming} width={150} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-8 text-teal-600 ">
                Professional skills
              </h3>
              <div className="grid grid-cols-3">
                <ul>
                  <li className="text-gray-800 py-1">Python</li>
                  <li className="text-gray-800 py-1">Java</li>
                  <li className="text-gray-800 py-1">C++</li>
                  <li className="text-gray-800 py-1">Python</li>
                </ul>
                <ul>
                  <li className="text-gray-800 py-1">HTML</li>
                  <li className="text-gray-800 py-1">CSS</li>
                  <li className="text-gray-800 py-1">Javascript</li>
                  <li className="text-gray-800 py-1">React</li>
                </ul>
                <ul>
                  <li className="text-gray-800 py-1">MySQL</li>
                  <li className="text-gray-800 py-1">PHP</li>
                  <li className="text-gray-800 py-1">MongoDB</li>
                  <li className="text-gray-800 py-1">Firebase</li>
                </ul>
              </div>
            </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={softskills} width={190} height={130} />
              <h3 className="text-lg font-medium pt-4 pb-8 text-teal-600 ">
                Soft Skills
              </h3>
              <ul>
                  <li className="text-gray-800 py-1">Strategic Thinking</li>
                  <li className="text-gray-800 py-1">Fast learner</li>
                  <li className="text-gray-800 py-1">Time managemnet</li>
                  <li className="text-gray-800 py-1">Team player</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={interests} width={200} height={150} />
              <h3 className="text-lg font-medium  pb-8 text-teal-600 ">Interests</h3>
              <ul>
                  <li className="text-gray-800 py-1">Programming</li>
                  <li className="text-gray-800 py-1">Back-end development</li>
                  <li className="text-gray-800 py-1">AI and machine learning</li>
                  <li className="text-gray-800 py-1">Data science</li>
              </ul>
            </div>
          </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 
              id="projects"
              className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Here are few projects I have completed for the past couple of years
            </p>
          </div>
          <div className="grid grid-rows-3 gap-10 lg:flex-row">
            <div className="lg:flex gap-10">
              <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <h3 className="text-lg font-medium pt-4 pb-8 text-teal-600 text-center ">Digibinn smart dustbin project</h3>
                <Image
                  className="rounded-lg object-cover scale-100 hover:scale-110 ease-in duration-500 "
                  width={"50%"}
                  height={"25%"}
                  layout="responsive"
                  src={web1}
                />
                <p className="text-black mt-5 text-justify">This is a project developed by our team Codedump. I developed this responsive webapp using
                  react, tailwind and firebase</p>
              </div>
              <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-4 pb-8 text-teal-600 text-center ">Skin consultation center</h3>
                <Image
                  className="rounded-lg object-cover scale-100 hover:scale-110 ease-in duration-500"
                  width={"100%"}
                  height={"50%"}
                  layout="responsive"
                  src={web2}
                />
                <p className="text-black mt-5 text-justify">This is a software developed for a consultation center to manage patients, consultations
                and doctors. Java was used to develop this system</p>
              </div>
            </div>
            <div className="lg:flex gap-10">
              <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <h3 className="text-lg font-medium pt-4 pb-8 text-teal-600 text-center ">Accelerate</h3>
                <Image
                  className="rounded-lg object-cover scale-100 hover:scale-110 ease-in duration-500"
                  width={"50%"}
                  height={"25%"}
                  layout="responsive"
                  src={web3}
                />
                <p className="text-black mt-5 text-justify">A webpage developed by our team on car racing. This was developed by 
                HTML, CSS and Javascript</p>
              </div>
              <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-4 pb-8 text-teal-600 text-center ">Student grading system</h3>
                <Image
                  className="rounded-lg object-cover scale-100 hover:scale-110 ease-in duration-500"
                  width={"100%"}
                  height={"50%"}
                  layout="responsive"
                  src={web4}
                />
                <p className="text-black mt-5 text-justify">This is a software developed for student grading. Python was used to develop this system</p>
              </div>
            </div>
            <div className="lg:flex gap-10">
              <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <h3 className="text-lg font-medium pt-4 pb-8 text-teal-600 text-center ">Cruise management system</h3>
                <Image
                  className="rounded-lg object-cover scale-100 hover:scale-110 ease-in duration-500"
                  width={"50%"}
                  height={"25%"}
                  layout="responsive"
                  src={web5}
                />
                <p className="text-black mt-5 text-justify">A cruise management system was developed using Java concepts</p>
              </div>
              <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-4 pb-8 text-teal-600 text-center ">Pong by HINNT</h3>
                <Image
                  className="rounded-lg object-cover scale-100 hover:scale-110 ease-in duration-500"
                  width={"100%"}
                  height={"50%"}
                  layout="responsive"
                  src={web6}
                />
                <p className="text-black mt-5 text-justify">This is a game developed by our team in University of Kelaniya. We used
                C++ and Raylib library for this</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
        <div>
            <h3 
              id="contactme"
              className="text-3xl py-1 dark:text-white ">Contact me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Feel free to contact me anytime
            </p>
          </div>
        <div className="shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 h-auto">
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="message"
              rows="5"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </section>
      </main>
      
    </div>
  );
}
