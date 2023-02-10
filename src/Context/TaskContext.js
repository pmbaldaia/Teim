import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext} from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const getToken = async () => {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  };

  const getTasks = async () => {
    const token = await getToken();
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };
    const bodyParameters = {
      key: 'value',
    };
    console.log(bodyParameters, config);

    const req = await axios
      .get('http://10.0.2.2:3000/tasks/', config, bodyParameters)
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

  const createTask = async (name, project) => {
    const token = await getToken();
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };
    const bodyParameters = {
      key: 'value',
    };
    console.log(bodyParameters, config);

    const req = await axios
      .post('http://10.0.2.2:3000/tasks/', {title: name, project_id: project})
      .then(function (response) {
        try {
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
    <TaskContext.Provider value={{getTasks, getToken, createTask}}>
      {children}
    </TaskContext.Provider>
  );
};
