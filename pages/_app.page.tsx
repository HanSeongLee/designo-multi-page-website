import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Jost } from 'next/font/google';

const jost = Jost({
  weight: ['400', '500'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <style jsx global>{`
          :root {
            --jost-font: ${jost.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
