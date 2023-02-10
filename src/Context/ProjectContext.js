import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext} from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({children}) => {
  const getToken = async () => {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  };

  const getProjects = async () => {
    const token = await getToken();
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };
    const bodyParameters = {
      key: 'value',
    };

    const req = await axios
      .get('http://10.0.2.2:3000/projects', config, bodyParameters)
      .then(function (response) {
        try {
          console.log(response.data);
          return response.data;
        } catch (e) {
          console.log(e);
        } // your catch block
      })
      .catch(function (error) {
        console.log(error);
      });

    return req;
  };

  return (
    <ProjectContext.Provider value={{getProjects, getToken}}>
      {children}
    </ProjectContext.Provider>
  );
};
