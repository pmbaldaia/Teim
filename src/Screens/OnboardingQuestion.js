import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import React, {useContext} from 'react';
import BackBtn from '../Components/BackBtn';
import {useTheme} from '@react-navigation/native';
import {AuthContext} from '../Context/AuthContext';

export default function OnboardingQuestion({setLoggedIn, navigation}) {
  const {login, changeSetupDone} = useContext(AuthContext);

  const {colors} = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.background,
      flex: 1,
      height: '100%',
      marginTop: Platform.OS === 'ios' ? 40 : 0,
    },
    contentContainer: {
      flex: 1,
      marginTop: 280,
      marginHorizontal: '5%',
    },
    header: {
      fontSize: 32.44,
      fontFamily: 'PPNeueMontreal-Bold',
      color: colors.text,
      textAlign: 'left',
    },
    subHeader: {
      fontSize: 16,
      fontFamily: 'PPNeueMontreal-Medium',
      color: colors.text,
      textAlign: 'left',
      lineHeight: 23,
      paddingBottom: 25,
    },
    noBtn: {
      backgroundColor: '#222148',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 4,
      borderColor: '#847EFF',
      borderWidth: 1,
    },
    noBtnText: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-SemiBold',
    },
    yesBtn: {
      backgroundColor: '#6B64FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 4,
      marginVertical: 10,
    },
    yesBtnText: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-SemiBold',
    },
    oval: {
      width: 110,
      height: 110,
      marginTop: Platform.OS === 'ios' ? 100 : 0,
      marginLeft: 80,
      backgroundColor: '#6B64FF',
      transform: [{scale: 6}, {rotate: '105deg'}],
      borderTopLeftRadius: 208,
      borderTopRightRadius: 208,
      borderBottomLeftRadius: 205,
      borderBottomRightRadius: 205,
    },
  });

  const handleSubmit = () => {
    changeSetupDone();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.oval} />
      <BackBtn navigation={navigation} />
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Precisa de ajuda?</Text>
        <Text style={styles.subHeader}>
          Se não está familiarizado com a TEIM ou outras aplicações de gestão de
          tempo, recomendamos que realize o tutorial.
        </Text>
        <View style={styles.loginBtnContainer}>
          <Pressable style={styles.noBtn} onPress={handleSubmit}>
            <Text style={styles.noBtnText}>
              Não - quero utilizar a aplicação
            </Text>
          </Pressable>
          <Pressable style={styles.yesBtn} onPress={handleSubmit}>
            <Text style={styles.noBtnText}>Sim - preciso de ajuda</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
