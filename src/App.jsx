
import Home from './components/Home';
import GlobalContextsProvider from './components/plasmic/classy_agency_website/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Home /></GlobalContextsProvider>);
}

export default App;
  