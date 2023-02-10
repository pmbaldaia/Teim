import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import {MyTabBar} from '../Components/TabBar';
import Calendar from '../Screens/Calendar';
import Statistics from '../Screens/Statistics';
import ProfileNavigator from './ProfileNavigator';
import Project from '../Screens/Project';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Project" component={Project} />
      <Tab.Screen name="Calendário" component={Calendar} />
      <Tab.Screen name="Relatório" component={Statistics} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
