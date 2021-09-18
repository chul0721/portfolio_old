import React from 'react'
import { withUserAgent } from 'next-useragent'
import UserAgentProps from '../typings/UserAgentProps'
import BrowserSupport from '../components/browserSupport'

class Home extends React.Component<UserAgentProps> {
  render() {
    const { ua }: UserAgentProps = this.props

    return (
      <>
        {ua?.isIE || ua?.isSafari ? <BrowserSupport /> : <></>}

        <section className="w-screen h-screen">
          <div
            className="typing flex justify-center text-6xl font-bold pt-56"
            data-aos="fade-down"
          ></div>
          <span className="flex justify-center text-2xl font-semibold" data-aos="fade-right">
            Byung Chul Kim
          </span>
          <span className="scrolldown">
            <span></span>
          </span>
        </section>

        <section className="w-screen h-screen">
          <div className="font-bold text-4xl">Skills</div>
        </section>
      </>
    )
  }
}

export default withUserAgent(Home)
