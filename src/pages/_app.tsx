import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TurnsContextProvider } from 'context/TurnsContext';
import Header from '@components/Header';
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth';


export default function App({Component,pageProps}: AppProps<{session: Session;}>) {

  return (
    <SessionProvider session={pageProps.session}>
      <TurnsContextProvider>
        <Header/>
        <Component {...pageProps}  />
      </TurnsContextProvider> 
      </SessionProvider>

  );


}
