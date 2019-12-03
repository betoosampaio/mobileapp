import { createAppContainer, createSwitchNavigator } from 'react-navigation';




import Splash from './views/Start/splash/splash'
import Login from './views/Start/login/login';
import Registrar from './views/Start/registrar/registrar';
import Home from './views/home/home';







const Routes = createAppContainer(createSwitchNavigator({ Splash, Login, Registrar, Home  }));





export default Routes;