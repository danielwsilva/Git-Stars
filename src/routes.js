import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';
import Home from './pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Main,
      User,
      Repository,
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#565ee8',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
