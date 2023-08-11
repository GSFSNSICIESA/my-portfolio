'use client'

import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png';
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png";
import { useState } from 'react';
export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 dark:bg-gray-900'>
      <section className='h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-bold font-burtons'>DevelopedbyIbrahim</h1>
          <ul className='flex justify-between gap-10 items-center'>
            <li>
              <BsFillMoonStarsFill 
              onClick={()=> {
                setDarkMode(!darkMode)
              }}
              className='cursor-pointer text-2xl'/>
            </li>
            <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md hover:from-pink-500 hover:to-orange-500' href="#">Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Ibrahim Salah</h2>
          <h3 className='text-2xl py-2'>Web Programmer</h3>
          <p className='text-md py-5 text-gray-800'>I am a web programmer using Python and JavaScript</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillYoutube/>
          
        </div>
        <div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
          <Image src={deved} layout='fill' objectFit='cover'/>

        </div>
        </div>
        
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1'>Services I offer</h3>
          <p className=' text-md py-2 leading-8 text-gray-800'>Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.</p>
              <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='flex justify-center flex-col items-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={design} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful desings</h3>
            <p>Creating elegant designs suited for your needs</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-gray-800 py-1'>HTML</p>
            <p className='text-gray-800 py-1'>CSS</p>
            <p className='text-gray-800 py-1'>JavaScript</p>
            <p className='text-gray-800 py-1'>ReactJS</p>
            <p className='text-gray-800 py-1'>NextJS</p>
            <p className='text-gray-800 py-1'>TailwindCSS</p>

          </div>
          <div className='flex justify-center flex-col items-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={code} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful desings</h3>
            <p>Creating elegant designs suited for your needs</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-gray-800 py-1'>HTML</p>
            <p className='text-gray-800 py-1'>CSS</p>
            <p className='text-gray-800 py-1'>JavaScript</p>
            <p className='text-gray-800 py-1'>ReactJS</p>
            <p className='text-gray-800 py-1'>NextJS</p>
            <p className='text-gray-800 py-1'>TailwindCSS</p>

          </div>
          <div className='flex justify-center flex-col items-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={consulting} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful desings</h3>
            <p>Creating elegant designs suited for your needs</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-gray-800 py-1'>HTML</p>
            <p className='text-gray-800 py-1'>CSS</p>
            <p className='text-gray-800 py-1'>JavaScript</p>
            <p className='text-gray-800 py-1'>ReactJS</p>
            <p className='text-gray-800 py-1'>NextJS</p>
            <p className='text-gray-800 py-1'>TailwindCSS</p>

          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1'>Portfolio</h3>

        </div>
        <div>
          <div>
            <Image src={web1}/>
          </div>
          <div>
            <Image src={web2}/>
          </div>
          <div>
            <Image src={web3}/>
          </div>
          <div>
            <Image src={web4}/>
          </div>
          <div>
            <Image src={web5}/>
          </div>
          <div>
            <Image src={web6}/>
          </div>
        </div>
      </section>
    </main>
    </div>
    
  )
}
