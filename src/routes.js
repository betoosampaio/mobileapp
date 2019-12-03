import { createAppContainer, createSwitchNavigator } from 'react-navigation';




import Splash from './views/start/splash/Splash'
import Login from './views/start/login/Login';
import Registrar from './views/start/registrar/Registrar';
import Home from './views/home/Home';







const Routes = createAppContainer(createSwitchNavigator({ Splash, Login, Registrar, Home  }));





export default Routes;