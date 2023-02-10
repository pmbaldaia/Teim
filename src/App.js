import React, {useEffect} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import Navigation from './Navigation/Navigation';
import {AuthProvider} from './Context/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {TaskProvider} from './Context/TaskContext';
import {ProjectProvider} from './Context/ProjectContext';

export default function App() {
  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#faf2ec',
      text: '#141414',
    },
  };

  const scheme = useColorScheme();
  const {colors} = useTheme();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <TaskProvider>
          <ProjectProvider>
            <NavigationContainer
              theme={scheme === 'dark' ? DarkTheme : lightTheme}>
              <StatusBar
                backgroundColor={'#141414'}
                barStyle={
                  colors.background === '#141414'
                    ? 'light-content'
                    : 'dark-content'
                }
              />
              <Navigation />
            </NavigationContainer>
          </ProjectProvider>
        </TaskProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
