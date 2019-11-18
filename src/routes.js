import { createAppContainer, createSwitchNavigator } from 'react-navigation';




import Main from './views/Main/index';
import Registrar from './views/registrar/registrar';







const Routes = createAppContainer(createSwitchNavigator({ Main, Registrar }));





export default Routes;