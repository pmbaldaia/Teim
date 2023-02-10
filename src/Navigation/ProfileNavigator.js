import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminHome from '../Screens/AdminHome';
import Profile from '../Screens/Profile';
import Employee from '../Screens/EmployeeAdmin';
import Project from '../Screens/ProjectAdmin';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileHome" component={Profile} />
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="Employee" component={Employee} />
      <Stack.Screen name="Project" component={Project} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
