import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import {useTheme} from '@react-navigation/native';
import Radio from '../Components/Radio';
import {Canvas, Line, Path, Skia, vec} from '@shopify/react-native-skia';
import {curveBasis, line, scaleLinear, scaleTime} from 'd3';
import {originalData} from '../Data/Data';

const Statistics = ({navigation}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    navContainer: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      height: 55,
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
    },
    navText: {
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: '#faf2ec',
      fontSize: 16,
      marginBottom: 10,
    },
    filtersContainer: {
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
      height: 100,
      justifyContent: 'space-evenly',
      paddingLeft: 22,
    },
    filterHeader: {
      fontFamily: 'PPNeueMontreal-Medium',
      color: colors.text,
      fontSize: 14,
    },
    timeFilterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    graphContainer: {
      width: 200,
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
    },
    screen: {
      marginVertical: Platform.OS === 'ios' ? '17%' : 0,
    },
  });

  const values1 = [
    {value: 'Hoje'},
    {value: 'Esta Semana'},
    {value: 'Este mês'},
    {value: 'Este ano'},
  ];

  const values2 = [
    {value: 'Todos'},
    {value: 'Projeto 1'},
    {value: 'Projeto 2'},
    {value: 'Projeto 3'},
  ];

  return (
    <View style={styles.screen}>
      <Header headerText={'Relatório'} />
      <View style={styles.navContainer}>
        <Pressable>
          <Text style={styles.navText}>Funcionários</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Project')}>
          <Text style={styles.navText}>Projetos</Text>
        </Pressable>
      </View>
      <View style={styles.filtersContainer}>
        <View style={styles.timeFilterContainer}>
          <Text style={styles.filterHeader}>Tempo</Text>
          <ScrollView>
            <Radio data={values1} />
          </ScrollView>
        </View>
        <View style={styles.timeFilterContainer}>
          <Text style={styles.filterHeader}>Projeto</Text>
          <ScrollView>
            <Radio data={values2} />
          </ScrollView>
        </View>
        <View />
      </View>
    </View>
  );
};

export default Statistics;
