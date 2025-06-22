
import { RouterProvider } from 'react-router';
import { ThemeProvider } from './components/theme-provider'

import { router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ScrollToTop from './components/ScrollToTop';

function App() {



  return (
    <>
      


      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}

      <RouterProvider router={router} />

      {/* </ThemeProvider> */}

    </>

  )
}

export default App;
