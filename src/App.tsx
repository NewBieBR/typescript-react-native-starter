import { createBottomTabNavigator } from 'react-navigation';
import Home from './containers/Home';
import Settings from './containers/Settings';

// tslint:disable-next-line: variable-name
const App = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings,
  },
});

export default App;
