import React from 'react'
import Header from './Header'
import Clock from './Clock'
import { SkillCard, langs, frameworks } from './skillCard'
import { icons } from './icons'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <section className="w-full h-screen">
        <div>
          <Header />
          <div className="grid justify-center mt-20" data-aos="fade-down">
            <Clock />
          </div>
          <div className="flex justify-center items-center py-8">
            {Object.keys(icons).map((iconkey) => {
              const icon = icons[iconkey]
              return (
                <span key={icon.src} className="cursor-pointer px-2" data-aos="fade-up">
                  <Link href={icon.href} passHref>
                    <a target="_blank" rel="noreferrer">
                      <Image src={icon.src} width={icon.width} height={icon.height} alt="icons" />
                    </a>
                  </Link>
                </span>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-40 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M-0.27,6.42 C153.78,224.50 349.20,-49.98 502.54,22.20 L500.00,150.00 L0.00,150.00 Z"
            className="stroke-0 fill-current"
          ></path>
        </svg>
      </div>

      <section className="w-full h-screen bg-white">
        <div className="grid p-52">
          <div className="font-bold text-4xl text-black px-28 pb-20">Skills</div>
          <div className="grid grid-flow-col auto-cols-max justify-center p-2">
            {Object.keys(frameworks).map((frameworkkey) => {
              const framework = frameworks[frameworkkey]
              return (
                <div key={framework.name} className="px-4">
                  <SkillCard name={framework.name} src={framework.src} />
                </div>
              )
            })}
          </div>
          <div className="grid grid-flow-col auto-cols-max justify-center p-2">
            {Object.keys(langs).map((langkey) => {
              const lang = langs[langkey]
              return (
                <div key={lang.name} className="px-8">
                  <SkillCard name={lang.name} src={lang.src} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
