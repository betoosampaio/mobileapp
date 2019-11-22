import { createAppContainer, createSwitchNavigator } from 'react-navigation';





//Pages Home
import Home from './views/home/Home';








const Routes = createAppContainer(createSwitchNavigator({ Home }));





export default Routes;