import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Path, Svg} from 'react-native-svg';

const Employees = () => {
  const [employeeList, setemployeeList] = useState([
    {name: 'Alexandre Bessa', teams: 5},
    {name: 'João Pinho', teams: 4},
    {name: 'Pedro Baldaia', teams: 4},
  ]);

  const styles = StyleSheet.create({
    mainContainer: {
      paddingHorizontal: 20,
    },
    employeeContainer: {
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    secondContainer: {},
    thirdContainer: {
      justifyContent: 'center',
    },
    employeeName: {
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: '#faf2ec',
      fontSize: 16,
    },
  });

  return (
    <View style={styles.mainContainer}>
      {employeeList.map((item, index) => {
        return (
          <View style={styles.employeeContainer}>
            <View style={styles.secondContainer}>
              <Text style={styles.employeeName}>{item.name}</Text>
              <Text>{item.teams} equipas</Text>
            </View>
            <View style={styles.thirdContainer}>
              <Svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                  fill="#faf2ec"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </Svg>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Employees;
