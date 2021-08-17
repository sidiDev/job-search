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

  // Service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register("/sw.js").then((registration) => {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          )
        }, err => {
          console.log("ServiceWorker registration failed");
        })
      })
    }
  }, [])
  
  return (
    <div className="font-sans">
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
