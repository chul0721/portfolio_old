import React from 'react'
import { withUserAgent } from 'next-useragent'
import UserAgentProps from '../typings/UserAgentProps'
import BrowserSupport from '../components/browserSupport'
import Clock from '../components/Clock'
import { SkillCard, langs, frameworks } from '../components/skillCard'
import { icons } from '../components/icons'
import Image from 'next/image'
import Link from 'next/link'
import ThemeButton from '../components/themeButton'

const Main = (UserAgentProps: UserAgentProps) => {
  const { ua }: UserAgentProps = UserAgentProps

  const [page, setPage] = React.useState(1)
  const [theme, setTheme] = React.useState('dark')
  const [image, setImage] = React.useState(true)

  function changePage() {
    if (page == 1) {
      setPage(2)
    } else {
      setPage(1)
    }
  }

  function changeTheme() {
    if (theme === 'dark') {
      setTheme('light')
      setImage(false)
      document.getElementsByTagName('body')[0].classList.remove('darkTheme')
      document.getElementsByTagName('body')[0].classList.add('lightTheme')
    } else if (theme === 'light') {
      setTheme('dark')
      setImage(true)
      document.getElementsByTagName('body')[0].classList.remove('lightTheme')
      document.getElementsByTagName('body')[0].classList.add('darkTheme')
    } else {
      setTheme('dark')
      setImage(true)
      document.getElementsByTagName('body')[0].classList.remove('lightTheme')
      document.getElementsByTagName('body')[0].classList.add('darkTheme')
    }
  }

  return (
    <>
      {ua?.isIE || ua?.isMobile ? <BrowserSupport /> : <></>}
      <section className="w-full h-screen">
        <div>
          <div className="p-8 flex flex-wrap justify-between items-start">
            <div
              className="gradient typing font-semibold pl-10 pt-2 text-4xl"
              data-aos="fade-down"
            ></div>
            <div className="scrolldown">
              <span></span>
            </div>
            <div
              className="justify-end"
              data-aos="fade-down"
            >
              <ThemeButton currentTheme={theme} onClick={changeTheme} />
            </div>
          </div>
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
                      {image ? (
                        <Image src={icon.src} width={icon.width} height={icon.height} alt="icons" />
                      ) : (
                        <Image
                          src={icon.src2}
                          width={icon.width}
                          height={icon.height}
                          alt="icons"
                        />
                      )}
                    </a>
                  </Link>
                </span>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-40 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full text-white">
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

export default withUserAgent(Main)
