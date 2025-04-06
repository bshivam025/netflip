import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <Provider store={appStore}>
      <Body/>
      <Analytics />
    </Provider>
  );
}

export default App;
