import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import img2 from '../../assets/images/projeto.jpg';
import LinearGradient from 'react-native-linear-gradient';
import BackBtn from '../Components/BackBtn';
import Employees from '../Components/Employees';
import Projectinfo from '../Components/Projectinfo';

const Employee = ({navigation}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#6B64FF',
      height: '100%',
      display: 'flex',
    },
    image: {height: 230, width: null},
    categoryHeaderContainer: {position: 'absolute', bottom: 0},
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
    infoContainer: {
      marginTop: 20,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={img2} style={styles.image}>
        <BackBtn navigation={navigation} />
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={{height: '100%', width: '100%'}}
        />
        <View style={styles.categoryHeaderContainer}>
          <Text style={styles.categoryHeader}>Projetos</Text>
          <Text style={styles.categorySubHeader}>4 Projetos</Text>
        </View>
      </ImageBackground>
      <View style={styles.navContainer}>
        <Pressable onPress={() => navigation.navigate('Employee')}>
          <Text style={styles.navText}>Funcionários</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.navText}>Projetos</Text>
        </Pressable>
      </View>
      <View>
        <View>
          <Text>Selecionar</Text>
        </View>
        <View style={styles.infoContainer}>
          <Projectinfo />
        </View>
      </View>
    </View>
  );
};

export default Employee;
