import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
// export function reportWebVitals(metric: any) {
//   console.log(metric)
// }
function MyApp({ Component, pageProps }: AppProps) {
  return    <Component {...pageProps} />
}

export default MyApp
