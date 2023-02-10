import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import MembersBadge from './MembersBadge';

const Projectinfo = ({theme}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#faf2ec',
      borderRadius: 10,
      height: 170,
      justifyContent: 'space-between',
      marginHorizontal: 18,
    },
    mainContainerDark: {
      backgroundColor: '#1A1920',
      borderRadius: 10,
      height: 170,
      justifyContent: 'space-between',
      marginHorizontal: 18,
      borderColor: '#242424',
      borderWidth: 1,
    },
    projectName: {
      color: '#141414',
      fontSize: 20,
      fontFamily: 'PPNeueMontreal-SemiBold',
    },
    projectNameDark: {
      color: '#faf2ec',
      fontSize: 20,
      fontFamily: 'PPNeueMontreal-SemiBold',
    },
    topContainer: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    descContainer: {
      paddingHorizontal: 20,
    },
    description: {
      color: '#141414',
      fontFamily: 'PPNeueMontreal-Medium',
      fontSize: 14,
    },
    descriptionDark: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Medium',
      fontSize: 14,
    },
    bottomContainer: {
      flexDirection: 'row',
      borderTopColor: '#e2e2e2',
      borderTopWidth: 1,
      alignItems: 'center',
      paddingVertical: 10,
      paddingLeft: 20,
    },
    bottomContainerDark: {
      flexDirection: 'row',
      borderTopColor: '#242424',
      borderTopWidth: 1,
      alignItems: 'center',
      paddingVertical: 10,
      paddingLeft: 20,
      backgroundColor: '#141414',
    },
    infoText: {
      color: '#727272',
      fontFamily: 'PPNeueMontreal-Medium',
      marginLeft: 10,
    },
    infoTextName: {
      color: '#141414',
      fontFamily: 'PPNeueMontreal-SemiBold',
    },
    infoTextNameDark: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-SemiBold',
    },
    membersBadgeContainer: {
      marginLeft: 20,
      position: 'relative',
      bottom: 15,
    },
  });

  console.log(theme);

  return (
    <View
      style={
        theme === 'dark' ? styles.mainContainerDark : styles.mainContainer
      }>
      <View style={styles.topContainer}>
        <Text
          style={
            theme === 'dark' ? styles.projectNameDark : styles.projectName
          }>
          Project 1
        </Text>
        <Svg
          width="25"
          height="25"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
            fill="#6B64FF"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </Svg>
      </View>
      <View style={styles.membersBadgeContainer}>
        <MembersBadge />
      </View>
      <View style={styles.descContainer}>
        <Text
          style={
            theme === 'dark' ? styles.descriptionDark : styles.description
          }>
          Descrição
        </Text>
      </View>
      <View
        style={
          theme === 'dark' ? styles.bottomContainerDark : styles.bottomContainer
        }>
        <Svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
            fill="#6B64FF"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </Svg>
        <Text style={styles.infoText}>
          Projeto liderado por
          <Text
            style={
              theme === 'dark' ? styles.infoTextNameDark : styles.infoTextName
            }>
            {' '}
            Alexandre Bessa
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Projectinfo;
