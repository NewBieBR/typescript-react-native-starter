import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './containers/Home';
import Settings from './containers/Settings';

const App = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings,
  },
});

export default App;
