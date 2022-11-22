import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TurnsContextProvider } from 'context/TurnsContext';
import Header from '@components/Header';
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth';
import { DashboardLayout } from '@components/dashboard-layout';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../theme/index'
import { CssBaseline } from '@mui/material';

export default function App({Component,pageProps}: AppProps<{session: Session;}>) {

  return (
    <SessionProvider session={pageProps.session}>
      <TurnsContextProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout>
        <Component {...pageProps}  />

      </DashboardLayout>
        </ThemeProvider>

      
      </TurnsContextProvider> 
      </SessionProvider>

  );


}
