import React from 'react'
import { withUserAgent } from 'next-useragent'
import UserAgentProps from '../typings/UserAgentProps'
import BrowserSupport from '../components/browserSupport'
import Home from '../components/Home'

const Main = (UserAgentProps: UserAgentProps) => {
  const { ua }: UserAgentProps = UserAgentProps

  return (
    <>
      {ua?.isIE || ua?.isMobile ? <BrowserSupport /> : <></>}
      <Home />
    </>
  )
}

export default withUserAgent(Main)
