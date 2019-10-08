import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginPage from './pages/login/login';

const Routes = createAppContainer(
  createSwitchNavigator({
    LoginPage
  })
);

export default Routes;