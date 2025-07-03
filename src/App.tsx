
import { RouterProvider } from 'react-router';
import { Analytics } from "@vercel/analytics/react";
import { router } from './router';

function App() {



  return (
    <>


      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}

      <RouterProvider router={router} />

      {/* </ThemeProvider> */}
      <Analytics />
    </>

  )
}

export default App;
