import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import TextInput2 from '../Components/TextInput2';
import DropDownPicker from 'react-native-dropdown-picker';
import {Svg, Path} from 'react-native-svg';
import Radio from './Radio';
import {ProjectContext} from '../Context/ProjectContext';
import {TaskContext} from '../Context/TaskContext';
import {useForm} from 'react-hook-form';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Drawer = ({navigation}) => {
  const {colors} = useTheme();
  const {createTask, getToken} = useContext(TaskContext);

  const [name, setName] = useState([]);

  const [projects, setProjects] = useState([]);

  const {getProjects} = useContext(ProjectContext);

  useEffect(() => {
    const getProjectsEffect = async () => {
      const result = await getProjects();
      const objectToAdd = {
        label: result[0].name,
        value: result[0].name,
      };
      setProjects(oldArray => [...oldArray, objectToAdd]);
    };

    getProjectsEffect();
  }, []);

  const [orderOpen, setorderOpen] = useState(false);
  const [timeOpen, settimeOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    {label: 'Recente', value: 'recente'},
    {label: 'Duração (cres.)', value: 'duracaoCres'},
    {label: 'Duração (decres.)', value: 'duracaoDecres'},
  ]);

  const styles = StyleSheet.create({
    bottomSheetContainer: {
      height: SCREEN_HEIGHT,
      width: '100%',
      backgroundColor: '#121212',
      position: 'absolute',
      zIndex: 5000,
      top: SCREEN_HEIGHT,
      borderRadius: 25,
    },
    formContainer: {
      marginTop: 20,
    },
    line: {
      width: 75,
      height: 4,
      backgroundColor: 'grey',
      alignSelf: 'center',
      marginVertical: 15,
      borderRadius: 5,
    },
    header: {
      marginTop: 10,
      paddingHorizontal: 30,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      height: 100,
    },
    headerText: {
      fontSize: 29,
      color: colors.text,
      fontFamily: 'PPNeueMontreal-Bold',
    },
    headersubText: {
      fontSize: 14,
      color: colors.text,
      fontFamily: 'PPNeueMontreal-Medium',
      lineHeight: 20,
    },
    dropDownContainer: {
      marginLeft: 10,
      marginRight: 30,
    },
    dropDownContainer2: {
      flexDirection: 'row',
    },
    durationContainer: {
      marginTop: 20,
      width: '100%',
    },
    durationContainer2: {
      marginTop: 10,
      width: '100%',
      justifyContent: 'space-between',
    },
    projectBtn: {
      flex: 0.8,
      backgroundColor: colors.notification,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    projectBtnText: {
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: colors.text,
    },
    dropDownHeader: {
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: colors.text,
      marginLeft: 20,
      marginTop: 14,
    },
    form1: {
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      paddingBottom: 30,
    },
    textInputContainer: {
      position: 'relative',
      bottom: 65,
      width: 267,
      left: 130,
    },
    submitContainer: {
      backgroundColor: colors.notification,
      position: 'relative',
      bottom: 80,
      marginHorizontal: 40,
      borderRadius: 10,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitText: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 17,
    },
  });

  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 10;

  const scrollTo = useCallback(destination => {
    'worklet';
    translateY.value = withSpring(destination, {damping: 50});
  });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < SCREEN_HEIGHT / 2) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 3);
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });

  const {control, handleSubmit} = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const durationValues = [
    {value: '1 hora'},
    {value: '2 horas'},
    {value: '3 horas'},
    {value: '4 horas'},
    {value: 'Personalizado'},
  ];

  return (
    <GestureDetector gesture={gesture}>
      <Animated.ScrollView
        style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Adicionar Tarefa</Text>
          <Text style={styles.headersubText}>
            Pode criar aqui uma nova tarefa. Se ainda não sabe a sua duração,
            sugerimos que use o temporizador.
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View>
            <View>
              <TextInput2
                control={control}
                name={['Nome da Tarefa']}
                style={styles.textInput}
              />
            </View>
            <View style={styles.dropDownContainer}>
              <Text style={styles.dropDownHeader}>Projeto</Text>
              <View style={styles.dropDownContainer2}>
                <DropDownPicker
                  open={orderOpen}
                  value={value}
                  items={projects}
                  setOpen={setorderOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={{
                    backgroundColor: '#1A1920',
                    borderColor: '#242424',
                    flex: 1,
                  }}
                  dropDownContainerStyle={{
                    backgroundColor: '#1A1920',
                    borderColor: '#242424',
                  }}
                  textStyle={{
                    fontSize: 14,
                    color: '#faf2ec',
                  }}
                  containerStyle={{
                    flex: 1,
                    marginLeft: 20,
                    marginRight: 5,
                  }}
                  zIndex={3000}
                  zIndexInverse={1000}
                  placeholder="Ordenar por"
                  placeholderStyle={{fontFamily: 'PPNeueMontreal-Medium'}}
                  showArrowIcon={true}
                  ArrowDownIconComponent={({style}) => (
                    <Svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                        fill="#faf2ec"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      />
                    </Svg>
                  )}
                />
                <Pressable
                  style={styles.projectBtn}
                  onPress={() => navigation.navigate('Project')}>
                  <Text style={styles.projectBtnText}>Ver Projeto</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.form1}>
            <View style={styles.durationContainer}>
              <Text style={styles.dropDownHeader}>Duração</Text>
              <View style={styles.durationContainer2}>
                <Radio data={durationValues} />
                <View style={styles.textInputContainer}>
                  <TextInput2 control={control} name={['']} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.form1}>
            <Pressable
              style={styles.submitContainer}
              onPress={createTask(name, value)}>
              <Text style={styles.submitText}>Concluir</Text>
            </Pressable>
          </View>
        </View>
      </Animated.ScrollView>
    </GestureDetector>
  );
};

export default Drawer;
