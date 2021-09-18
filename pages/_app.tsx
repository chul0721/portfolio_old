import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../public/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: false,
      duration: 800,
      once: false
    })
  }, [])

  return (
    <>
      <Head>
        <title>김병철의 포트폴리오</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
