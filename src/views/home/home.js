import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Inicio from '../home/pages/Inicio';
import Buscar from  '../home/pages/Buscar';
import Perfil from  '../home/pages/Perfil';



const Home = createMaterialBottomTabNavigator(
    {
      Inicio: {
        screen: Inicio,
        navigationOptions: () => ({
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={20} color={focused ? '#fff' : '#ddd'} />
          ),
        }),
      },
      Buscar: {
        screen: Buscar,
        navigationOptions: () => ({
          tabBarIcon: ({ focused }) => (
            <Icon name="search" size={20} color={focused ? '#fff' : '#ddd'} />
          ),
        }),
      },
      Perfil: {
        screen: Perfil,
        navigationOptions: () => ({
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={20} color={focused ? '#fff' : '#ddd'} />
          ),
        }),
      },
    },
    {
      barStyle: {
        backgroundColor: '#7159c1',
      },
    },
  );

export default Home;
