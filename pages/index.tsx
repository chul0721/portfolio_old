import React from 'react'
import { withUserAgent } from 'next-useragent'
import UserAgentProps from '../typings/UserAgentProps'
import BrowserSupport from '../components/browserSupport'
import { SkillCard, langs, frameworks } from '../components/skillCard'

class Home extends React.Component<UserAgentProps> {
  render() {
    const { ua }: UserAgentProps = this.props

    return (
      <>
        {ua?.isIE || ua?.isMobile ? <BrowserSupport /> : <></>}

        <section className="w-screen h-screen">
          <div
            className="typing flex justify-center text-6xl font-bold pt-56"
            data-aos="fade-down"
          ></div>
          <span className="flex justify-center text-2xl font-semibold pl-1" data-aos="fade-right">
            Byung Chul Kim
          </span>
          <span className="scrolldown">
            <span></span>
          </span>
        </section>
      </>
    )
  }
}

export default withUserAgent(Home)


/*
              {Object.keys(frameworks).map((frameworkkey) => {
                const framework = frameworks[frameworkkey]
                return (
                  <div key={framework.name} className="px-4">
                    <SkillCard name={framework.name} src={framework.src} />
                  </div>
                )
              })}
              {Object.keys(langs).map((langkey) => {
                const lang = langs[langkey]
                return (
                  <div key={lang.name} className="px-8">
                    <SkillCard name={lang.name} src={lang.src} />
                  </div>
                )
              })}
*/
