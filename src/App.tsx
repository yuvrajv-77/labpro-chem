
import { RouterProvider } from 'react-router';

import { router } from './router';

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
