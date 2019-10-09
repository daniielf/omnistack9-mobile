import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginPage from './pages/login/login';
import ListPage from './pages/list/list';

const Routes = createAppContainer(
  createSwitchNavigator({
    LoginPage,
    ListPage
  })
);

export default Routes;