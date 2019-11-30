import { createAppContainer, createSwitchNavigator } from 'react-navigation';




import Splash from './views/splash/splash'
import Login from './views/login/login';
import Registrar from './views/registrar/registrar';
import Home from './views/home/home';







const Routes = createAppContainer(createSwitchNavigator({ Splash, Login, Registrar, Home }));





export default Routes;