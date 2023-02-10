import React, {useContext, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import TextInput1 from '../Components/TextInput1';
import {AuthContext} from '../Context/AuthContext';

function Login({navigation}) {
  const {login} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      backgroundColor: '#faf2ec',
    },
    container1: {
      flex: 1.6,
    },
    container2: {
      flex: 1,
      backgroundColor: '#141414',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container3: {
      width: '67%',
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
    },
    inputForgotContainer: {
      flex: 3,
      paddingTop: 30,
    },
    stayLoggedSubmitContainer: {
      flex: 1.3,
      paddingBottom: 20,
      marginBottom: '4%',
    },
    forgotPassword: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Medium',
      marginTop: '3.5%',
    },
    stayLoggedText: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Medium',
      marginBottom: '4%',
    },
    loginBtn: {
      backgroundColor: '#faf2ec',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 49,
      borderRadius: 4,
    },
    loginBtnText: {
      color: '#141414',
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 17,
    },
    loginImage: {
      alignItems: 'center',
      marginVertical: '35%',
      marginHorizontal: '-5%',
      resizeMode: 'center',
      height: 250,
      width: 430,
    },
  });

  const onSubmit = data => {
    navigation.navigate('ChangePassword');
    login(email, password);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <Image
          style={styles.loginImage}
          source={require('../../assets/images/teim.png')}
        />
      </View>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <View style={styles.inputForgotContainer}>
            <TextInput1
              name={['Email', 'Palavra-Passe']}
              setEmail={setEmail}
              setPassword={setPassword}
            />
            <View>
              <Pressable>
                <Text style={styles.forgotPassword}>
                  Esqueceu-se da sua palavra-passe?
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.stayLoggedSubmitContainer}>
            <View>
              <Text style={styles.stayLoggedText}>Manter sessão iniciada</Text>
            </View>
            <View style={styles.loginBtnContainer}>
              <Pressable onPress={() => onSubmit()} style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;
