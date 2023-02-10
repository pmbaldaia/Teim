import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import img1 from '../../assets/images/funcionarios.jpg';
import LinearGradient from 'react-native-linear-gradient';
import BackBtn from '../Components/BackBtn';
import Employees from '../Components/Employees';

const Employee = ({navigation}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#6B64FF',
      height: '100%',
      display: 'flex',
    },
    image: {height: 230, width: null},
    categoryHeaderContainer: {paddingLeft:10,position: 'absolute', bottom: 0},
    categoryHeader: {
      fontFamily: 'PPNeueMontreal-Bold',
      color: '#faf2ec',
      fontSize: 33,
    },
    categorySubHeader: {
      fontFamily: 'PPNeueMontreal-Medium',
      color: '#faf2ec',
      fontSize: 16,
    },
    navContainer: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#7B76F5',
      height: 85,
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
    },
    navText: {
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: '#faf2ec',
      fontSize: 18,
      marginBottom: 12,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={img1} style={styles.image}>
        <BackBtn navigation={navigation} />
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={{height: '100%', width: '100%'}}
        />
        <View style={styles.categoryHeaderContainer}>
          <Text style={styles.categoryHeader}>Funcionários</Text>
          <Text style={styles.categorySubHeader}> 18 Funcionários</Text>
        </View>
      </ImageBackground>
      <View style={styles.navContainer}>
        <Pressable>
          <Text style={styles.navText}>Funcionários</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Project')}>
          <Text style={styles.navText}>Projetos</Text>
        </Pressable>
      </View>
      <View>
        <Employees />
      </View>
    </View>
  );
};

export default Employee;
