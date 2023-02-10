import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PasswordVisibility from '../Hooks/PasswordVisibility';

function TextInput2({control, name}) {
  const {colors} = useTheme();

  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    PasswordVisibility();

  const styles = StyleSheet.create({
    label: {
      fontSize: 14,
      fontFamily: 'PPNeueMontreal-Medium',
      color: colors.text,
      marginBottom: 8,
    },
    mainContainer: {
      borderRadius: 4,
      marginHorizontal: 30,
    },
    input: {
      backgroundColor: '#1A1920',
      borderWidth: 1,
      borderColor: '#242424',
      borderRadius: 5,
      fontFamily: 'PPNeueMontreal-Medium',
      fontSize: 16,
    },
    toggle: {
      color: 'white',
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer1}>
        <Text style={styles.label}>{name[0]}</Text>
        <Controller
          control={control}
          name={name[0]}
          render={({field: {value, onChange}}) => (
            <TextInput
              style={styles.input}
              value={value}
              onTextChange={onChange}
              autoCorrect={false}
            />
          )}
        />
      </View>
    </View>
  );
}

export default TextInput2;
