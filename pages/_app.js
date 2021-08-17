import '../styles/customize.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import { useEffect } from 'react'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  showSpinner: false
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  
  return (
    <div className="font-sans max-w-screen-xl mx-auto">
      <Head>
        <meta property="og:site_name" content="USA job search" />
        <meta property="og:image" content="/cover.png" />
        <meta name="keyword" content="" />
        <meta name="description" content="" />
        <title>USA job search </title>
      </Head>
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
