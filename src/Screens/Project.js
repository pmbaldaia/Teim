import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BackBtn from '../Components/BackBtn';
import {useTheme} from '@react-navigation/native';
import SelectedUser from '../Components/SelectedUser';

const Project = ({navigation}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    headerContainer: {
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
      alignItems: 'center',
      height: 200,
    },
    projectName: {
      color: colors.text,
      fontSize: 36,
      fontFamily: 'PPNeueMontreal-Bold',
    },
    clientContainer: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    clientText1: {
      color: colors.text,
      fontSize: 16,
      fontFamily: 'PPNeueMontreal-SemiBold',
      marginHorizontal: 10,
    },
    clientText2: {
      color: colors.text,
      fontSize: 14,
      fontFamily: 'PPNeueMontreal-Medium',
      marginHorizontal: 10,
    },
  });

  return (
    <View>
      <BackBtn navigation={navigation} />
      <View style={styles.headerContainer}>
        <Text style={styles.projectName}>Projeto 1</Text>
        <View style={styles.clientContainer}>
          <Text style={styles.clientText1}>Cliente</Text>
          <Text style={styles.clientText2}>Alexandre Bessa</Text>
        </View>
        <SelectedUser />
      </View>
    </View>
  );
};

export default Project;
