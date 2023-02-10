import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MembersBadge = () => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#1A2C59',
      borderColor: '#3765DB',
      borderWidth: 1,
      borderRadius: 20,
      width: 90,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Medium',
      padding: 4,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>3 membros</Text>
    </View>
  );
};

export default MembersBadge;
