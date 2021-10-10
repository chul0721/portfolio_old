import React from 'react'
import { withUserAgent } from 'next-useragent'
import UserAgentProps from '../typings/UserAgentProps'
import BrowserSupport from '../components/browserSupport'
import { SkillCard, langs, frameworks, db, others } from '../components/skillCard'

class Home extends React.Component<UserAgentProps> {
  render() {
    const { ua }: UserAgentProps = this.props

    return (
      <>
        {ua?.isIE || ua?.isIos ? <BrowserSupport /> : <></>}

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

        <section className="w-screen h-screen">
          <div className="font-bold text-4xl">Skills</div>
          <div className="grid">
            <div className="grid grid-flow-col auto-cols-max">
              {Object.keys(langs).map((langkey) => {
                const lang = langs[langkey]
                return (
                  <div key={lang.name} className="">
                    <SkillCard name={lang.name} src={lang.src} />
                  </div>
                )
              })}
            </div>
            <div className="grid grid-flow-col auto-cols-max">
              {Object.keys(frameworks).map((frameworkkey) => {
                const framework = frameworks[frameworkkey]
                return (
                  <div key={framework.name} className="">
                    <SkillCard name={framework.name} src={framework.src} />
                  </div>
                )
              })}
            </div>
            <div className="grid grid-flow-col auto-cols-max">
              {Object.keys(db).map((dbkey) => {
                const database = db[dbkey]
                return (
                  <div key={database.name} className="">
                    <SkillCard name={database.name} src={database.src} />
                  </div>
                )
              })}
            </div>
            <div className="grid grid-flow-col auto-cols-max">
              {Object.keys(others).map((otherkey) => {
                const other = others[otherkey]
                return (
                  <div key={other.name} className="">
                    <SkillCard name={other.name} src={other.src} />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default withUserAgent(Home)
