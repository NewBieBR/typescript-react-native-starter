import {AppNavigations, AppStackRoutes} from 'src/navigators/AppStack';
import {MainBottomTabNavigations, MainBottomTabRoutes} from 'src/navigators/MainBottomTab';

export type Navigations = AppNavigations & MainBottomTabNavigations;

export type Routes = AppStackRoutes & MainBottomTabRoutes;
