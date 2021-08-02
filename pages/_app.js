// import '../styles/globals.css'
import '../styles/customize.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
