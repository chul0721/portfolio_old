import React from 'react'
import { withUserAgent } from 'next-useragent'
import UserAgentProps from '../typings/UserAgentProps'
import BrowserSupport from '../components/browserSupport'
import { SkillCard, skills } from '../components/skillCard'

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
          <div className="flex">
            {Object.keys(skills).map((skillkey) => {
              const skill = skills[skillkey]
              return (
                <div key={skill.name} className="p-10">
                  <SkillCard
                    name={skill.name}
                    src={skill.src}
                  />
                </div>
              )
            })}
          </div>
        </section>
      </>
    )
  }
}

export default withUserAgent(Home)
