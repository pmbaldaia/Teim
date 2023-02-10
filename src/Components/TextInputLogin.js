import React from 'react';
import {Controller} from 'react-hook-form';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import PasswordVisibility from '../Hooks/PasswordVisibility';
import {Path, Svg} from 'react-native-svg';

function textInput1({control, name}) {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    PasswordVisibility();

  const styles = StyleSheet.create({
    label: {
      fontSize: 12.64,
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: '#141414',
    },
    mainContainer: {
      backgroundColor: '#faf2ec',
      borderRadius: 4,
      height: 130,
    },
    inputContainer1: {
      paddingLeft: 15,
      paddingTop: 15,
      borderColor: '#E2E2E2',
      borderWidth: 0.25,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      height: 65,
    },
    inputContainer2: {
      paddingLeft: 15,
      paddingTop: 15,
      borderColor: '#E2E2E2',
      borderWidth: 1,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      height: 65,
    },
    toggle: {
      color: 'black',
      textAlign: 'right',
      marginRight: '5%',
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
              value={value}
              onTextChange={onChange}
              autoCorrect={false}
            />
          )}
        />
      </View>
      <View style={styles.inputContainer2}>
        <Text style={styles.label}>{name[1]}</Text>
        <Controller
          control={control}
          name={name[1]}
          render={({field: {value, onChange}}) => (
            <TextInput
              value={value}
              onTextChange={onChange}
              autoCorrect={false}
              secureTextEntry={passwordVisibility}
            />
          )}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <Svg
            viewBox="0 0 100 100"
            width="100"
            height="100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M7 15.5L5.5 17.5M20.5 12.5C19.8612 13.5647 19.041 14.6294 18.0008 15.501M18.0008 15.501C16.5985 16.676 14.7965 17.5 12.5 17.5M18.0008 15.501L18 15.5M18.0008 15.501L19.5 17.5M12.5 17.5C8.5 17.5 6 15 4.5 12.5M12.5 17.5V20M15.5 17L16.5 19.5M9.5 17L8.5 19.5"
              stroke="white" /* "#121923" */
              stroke-width="1.2"
            />
          </Svg>
        </Pressable>
      </View>
    </View>
  );
}

export default textInput1;
