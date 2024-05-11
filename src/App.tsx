import { useRef } from 'react';
import PortalContext from './store/portal-context';
import './App.css';

import { Home } from './pages/Home/Index';
import StartingOverlay from './components/StartingOverlay/StartingOverlay';

const setCustomCSSVariable = (property: string, value: string) => {
  document.documentElement.style.setProperty(property, value);
};

function App() {
  const containerRef = useRef(null);

  const changePageTheme = (isInViewport: boolean) => {
    if (isInViewport) {
      setCustomCSSVariable('--base-background-clr', '#252422ff');
      setCustomCSSVariable('--main-dark-clr', '#f9cdcd');
      setCustomCSSVariable('--black-clr', '#f9cdcd');
    } else {
      setCustomCSSVariable('--base-background-clr', '#fcf9ee');
      setCustomCSSVariable('--main-dark-clr', '#252422');
      setCustomCSSVariable('--black-clr', '#000');
      setCustomCSSVariable('--black-clr', '#000');
    }
  };

  const contextValues = {
    changePageTheme,
  };

  return (
    <PortalContext.Provider value={contextValues}>
      <main ref={containerRef}>
        <StartingOverlay />
        <Home />
      </main>
    </PortalContext.Provider>
  );
}

export default App;
