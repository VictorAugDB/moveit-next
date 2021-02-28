import { NavigationBarProvider } from '../contexts/NavigationBarContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <NavigationBarProvider>
      <Component {...pageProps} />
    </NavigationBarProvider>
  )
}

export default MyApp
