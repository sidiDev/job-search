import '../styles/customize.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  return (
    <div className="font-sans">
      <Head>
        <meta name="keyword" content="" />
        <meta name="description" content="" />
        <title>USA job search </title>
      </Head>
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
