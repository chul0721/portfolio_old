import React from 'react'
import { withUserAgent } from 'next-useragent'
import UserAgentProps from '../typings/UserAgentProps'
import BrowserSupport from '../components/browserSupport'
import Header from '../components/Header'
import Clock from '../components/Clock'

class Home extends React.Component<UserAgentProps> {
  render() {
    const { ua }: UserAgentProps = this.props

    return (
      <>
        {ua?.isIE || ua?.isMobile ? <BrowserSupport /> : <></>}

        <section className="w-screen h-screen">
          <Header />
          <div className="grid justify-center mt-20">
            <Clock />
          </div>
        </section>
      </>
    )
  }
}

export default withUserAgent(Home)

/*
import { SkillCard, langs, frameworks } from '../components/skillCard'

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
