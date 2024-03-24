import './App.css';
import PortalContext from './store/portal-context';
import Home from './pages/Home/Home';

function App() {
  const changePageTheme = () => {
    console.log('change');
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
