import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContextProvider } from 'context/UserContext';
import { TurnsContextProvider } from 'context/TurnsContext';
import Header from '@components/Header';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <UserContextProvider>
      <TurnsContextProvider>
        <Header/>

        <Component {...pageProps} />
      </TurnsContextProvider>
    </UserContextProvider>
  );

}
