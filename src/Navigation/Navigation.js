import SetupNavigator from './SetupNavigator';
import MainNavigator from './MainNavigator';
import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import {ActivityIndicator, View} from 'react-native';

export default function Navigation() {
  const {isLoading, userToken, setupDone} = useContext(AuthContext);

  useEffect(() => {
    setInterval(() => console.log(userToken, setupDone), 2000);
  }, []);

  if (userToken !== null && setupDone === true) {
    return <MainNavigator />;
  } else {
    return <SetupNavigator />;
  }
}
