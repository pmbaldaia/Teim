import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native';
import React, {useContext, useState} from 'react';
import Header from '../Components/Header';
import {Path, Rect, Svg, Line} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';
import {AuthContext} from '../Context/AuthContext';
import avatar from '../../assets/images/avatar.jpg';
import Projectinfo from '../Components/Projectinfo';

const Profile = ({navigation}) => {
  const {logout} = useContext(AuthContext);

  const {colors} = useTheme();

  const [isAdmin, setisAdmin] = useState(true);

  const renderAdmin = () => {
    if (isAdmin) {
      return (
        <Pressable onPress={() => navigation.navigate('AdminHome')}>
          <View style={styles.adminContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.leftTopContainer}>
                <Text style={styles.adminTextBold}>
                  Você é um administrador
                </Text>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="#faf2ec"
                  viewBox="0 0 256 256">
                  <Rect width="256" height="256" fill="none" />
                  <Path
                    d="M37.9,207.9,91.7,59.8a8,8,0,0,1,13.2-2.9l94.2,94.2a8,8,0,0,1-2.9,13.2L48.1,218.1A7.9,7.9,0,0,1,37.9,207.9Z"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="15"
                  />
                  <Path
                    d="M168,72s0-24,24-24,24-24,24-24"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="15"
                  />
                  <Line
                    x1="102.4"
                    y1="198.4"
                    x2="57.6"
                    y2="153.6"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="15"
                  />
                  <Line
                    x1="144"
                    y1="16"
                    x2="144"
                    y2="40"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="15"
                  />
                  <Line
                    x1="216"
                    y1="112"
                    x2="232"
                    y2="128"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="15"
                  />
                  <Line
                    x1="216"
                    y1="80"
                    x2="240"
                    y2="72"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="15"
                  />
                  <Line
                    x1="76.8"
                    y1="100.8"
                    x2="155.2"
                    y2="179.2"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="15"
                  />
                </Svg>
              </View>
              <Text style={styles.adminTextMedium}>
                Aceda às suas ferramentas
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Svg
                width="46"
                height="46"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
                  fill={colors.notification}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </Svg>
            </View>
          </View>
        </Pressable>
      );
    }
  };

  const styles = StyleSheet.create({
    adminContainer: {
      backgroundColor: '#222148',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      height: 80,
      borderBottomColor: '#6B64FF',
      borderTopColor: '#6B64FF',
      borderBottomWidth: 1,
      borderTopWidth: 1,
    },
    leftTopContainer: {
      flexDirection: 'row',
    },
    arrowContainer: {
      backgroundColor: '#1A1920',
      borderRadius: 10,
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    adminTextBold: {
      fontFamily: 'PPNeueMontreal-Bold',
      color: colors.text,
      fontSize: 20,
    },
    adminTextMedium: {
      fontFamily: 'PPNeueMontreal-Medium',
      color: colors.text,
      fontSize: 14,
    },
    logoutContainer: {
      position: 'absolute',
      right: 20,
    },
    avatar: {
      width: 90,
      height: 90,
      borderRadius: 12,
      marginRight: 14,
    },
    userHeaderContainer: {
      marginHorizontal: 20,
      marginTop: 30,
      flexDirection: 'row',
    },
    userHeaderNameTagContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    userInfoContainer: {justifyContent: 'space-between'},
    userHeaderName: {
      fontFamily: 'PPNeueMontreal-Bold',
      color: colors.text,
      fontSize: 32,
    },
    fontFamily: 'PPNeueMontreal-Bold',
    userHeaderTag: {
      marginBottom: 5,
      marginLeft: 7,
      color: '#727272',
      fontFamily: 'PPNeueMontreal-Medium',
    },
    userHeaderDesc: {fontFamily: 'PPNeueMontreal-Medium', color: '#faf2ec'},
    projetosHeader: {
      color: colors.text,
      fontFamily: 'PPNeueMontreal-SemiBold',
      marginLeft: 20,
      marginBottom: 20,
      fontSize: 18,
    },
    projetosContainer: {
      marginTop: 20,
      borderTopColor: colors.border,
      borderTopWidth: 1,
      paddingTop: 20,
    },
    screen: {
      marginVertical: Platform.OS === 'ios' ? '17%' : 0,
    },
  });

  return (
    <View style={styles.screen}>
      <Header headerText={'Perfil'} />
      <Pressable onPress={logout} style={styles.logoutContainer}>
        <Svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
            fill="#faf2ec"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </Svg>
      </Pressable>
      {renderAdmin()}
      <View>
        <View style={styles.userHeaderContainer}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.userInfoContainer}>
            <View style={styles.userHeaderNameTagContainer}>
              <Text style={styles.userHeaderName}>Alexandre</Text>
              <Text style={styles.userHeaderTag}>#141414</Text>
            </View>
            <Text style={styles.userHeaderDesc}>Descrição</Text>
            <Text>Joined Frejen in 2022</Text>
          </View>
        </View>
      </View>
      <View style={styles.projetosContainer}>
        <Text style={styles.projetosHeader}>Projetos</Text>
        <Projectinfo theme={'dark'} />
      </View>
    </View>
  );
};

export default Profile;
