import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import ChangePassword from '../Screens/ChangePassword';
import OnboardingQuestion from '../Screens/OnboardingQuestion';

const Stack = createNativeStackNavigator();

const SetupNavigator = ({setLoggedIn}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen
        name="OnboardingQuestion"
        component={OnboardingQuestion}
        setLoggedIn={setLoggedIn}
      />
    </Stack.Navigator>
  );
};

export default SetupNavigator;
