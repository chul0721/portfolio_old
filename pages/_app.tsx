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
        <title>ByungChul Kim</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
