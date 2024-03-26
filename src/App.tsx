import './App.css';
import PortalContext from './store/portal-context';
import Home from './pages/Home/Home';

function App() {
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
    <PortalContext.Provider value={contextValues}>
      <Home />
    </PortalContext.Provider>
  );
}

export default App;
