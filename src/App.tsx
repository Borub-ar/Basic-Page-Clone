import './App.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import PortalContext from './store/portal-context';
import Home from './pages/Home/Home';
import { useRef } from 'react';

function App() {
  const containerRef = useRef(null);

  const changePageTheme = (isInViewport: boolean) => {
    if (isInViewport) {
      document.documentElement.style.setProperty('--base-background-clr', '#252422ff');
      document.documentElement.style.setProperty('--main-dark-clr', '#f9cdcd');
    } else {
      document.documentElement.style.setProperty('--base-background-clr', '#fcf9ee');
      document.documentElement.style.setProperty('--main-dark-clr', '#252422');
    }
  };

  const contextValues = {
    changePageTheme,
  };

  return (
    <LocomotiveScrollProvider options={{ smooth: true }} containerRef={containerRef}>
      <PortalContext.Provider value={contextValues}>
        <main data-scroll-container ref={containerRef}>
          <Home />
        </main>
      </PortalContext.Provider>
    </LocomotiveScrollProvider>
  );
}

export default App;
