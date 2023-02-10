import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import avatar from '../../assets/images/avatar.jpg';
import {useTheme} from '@react-navigation/native';
import {Path, Svg} from 'react-native-svg';

const SelectedUser = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#1A1920',
      borderColor: '#242424',
      borderWidth: 1,
      borderRadius: 10,
      width: '90%',
      paddingVertical: 7,
      paddingHorizontal: 15,
      marginTop: 20,
    },
    title: {
      color: colors.notification,
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 16,
      marginBottom: 4,
    },
    name: {
      color: colors.text,
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 16,
    },
    subText: {
      color: '#727272',
      fontFamily: 'PPNeueMontreal-Medium',
    },
    avatar: {
      width: 45,
      height: 45,
      borderRadius: 12,
      marginRight: 10,
    },
    contentAvatarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    leftContainer: {
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Líder do Projeto</Text>
      <View style={styles.contentAvatarContainer}>
        <View style={styles.leftContainer}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.contentContainer}>
            <Text style={styles.name}>Pedro Baldaia</Text>
            <Text style={styles.subText}>2 equipas</Text>
          </View>
        </View>

        <Svg
          width="25"
          height="25"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
            fill={colors.notification}
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </Svg>
      </View>
    </View>
  );
};

export default SelectedUser;
