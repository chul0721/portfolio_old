import { UserAgent, WithUserAgentProps } from 'next-useragent'

interface UserAgentProps extends UserAgent, WithUserAgentProps {}

export default UserAgentProps
