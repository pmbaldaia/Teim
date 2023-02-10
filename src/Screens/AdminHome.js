import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {Path, Rect, Svg, Line} from 'react-native-svg';
import BackBtn from '../Components/BackBtn';
import avatar from '../../assets/images/avatar.jpg';
import img1 from '../../assets/images/funcionarios.jpg';
import img2 from '../../assets/images/projeto.jpg';
import LinearGradient from 'react-native-linear-gradient';

const AdminHome = ({navigation}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#6B64FF',
      height: '100%',
      display: 'flex',
    },
    topContainer: {
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 15,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 12,
      marginRight: 14,
    },
    username: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 16,
    },
    header: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Bold',
      fontSize: 37,
    },
    subHeader: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Medium',
      fontSize: 16,
    },
    pressableContainer: {width: '100%', position: 'relative'},
    image: {height: 250, width: null},
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
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <BackBtn navigation={navigation} />
        <View style={styles.userContainer}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.username}>Alexandre Bessa</Text>
        </View>
        <Text style={styles.header}>Ferramentas de Administrador</Text>
        <Text style={styles.subHeader}>
          Controle todos os seus projetos e monitorize os seus funcionários e
          equipas.
        </Text>
      </View>
      <Pressable
        style={styles.pressableContainer}
        onPress={() => navigation.navigate('Employee')}>
        <ImageBackground source={img1} style={styles.image}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={{height: '100%', width: '100%'}}
          />
          <View style={styles.categoryHeaderContainer}>
            <Text style={styles.categoryHeader}>Funcionários</Text>
            <Text style={styles.categorySubHeader}>18 funcionários</Text>
          </View>
        </ImageBackground>
      </Pressable>
      <Pressable
        style={styles.pressableContainer}
        onPress={() => navigation.navigate('Project')}>
        <ImageBackground source={img2} style={styles.image}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={{height: '100%', width: '100%'}}
          />
          <View style={styles.categoryHeaderContainer}>
            <Text style={styles.categoryHeader}>Projetos</Text>
            <Text style={styles.categorySubHeader}>4 projetos</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default AdminHome;
