import './App.css';
import PortalContext from './store/portal-context';
import Home from './pages/Home/Home';

function App() {
  const changePageTheme = isInViewport => {
    // document.documentElement.style.setProperty('--base-background-clr', '#252422ff');
    // document.documentElement.style.setProperty('--main-dark-clr', '#f9cdcd');
    console.log(isInViewport);
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
