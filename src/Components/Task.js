import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {Path, Polygon, Svg} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';
import {Swipeable} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const Task = props => {
  console.log(props.data.item);

  const {colors} = useTheme();

  const styles = StyleSheet.create({
    taskContainer: {
      backgroundColor: '#1A1920',
      marginTop: 5,
      marginBottom: 5,
      height: 74,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    TaskSubTitle: {
      fontFamily: 'PPNeueMontreal-Medium',
      color: '#727272',
      fontSize: 14,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    },
    rightContainer: {
      marginRight: 30,
    },
    svg: {
      marginRight: 14,
    },
    TaskTitle: {
      fontSize: 18,
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: colors.text,
    },
    DurationContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    DurationText: {
      fontFamily: 'PPNeueMontreal-Medium',
      fontSize: 16,
      color: colors.text,
      marginHorizontal: 4,
    },
    deleteBox: {
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: 90,
      backgroundColor: '#EE293F',
      height: '88%',
    },
    deleteText: {
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: '#faf2ec',
    },
  });

  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
    });
    return (
      <View style={styles.deleteBox}>
        <Animated.Text style={styles.deleteText}>Delete</Animated.Text>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe} rightOpenValue={-100}>
      <View style={styles.taskContainer}>
        <View style={styles.leftContainer}>
          <Svg
            width="30px"
            height="30px"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={styles.svg}>
            <Polygon
              fill={props.data.item.project.color}
              points="124.846628329842,192.728879323751 75.153371670158,192.728879323751 32.1177490060914,167.882250993909 7.27112067624945,124.846628329842 7.27112067624944,75.153371670158 32.1177490060914,32.1177490060915 75.1533716701579,7.27112067624947 124.846628329842,7.27112067624944 167.882250993909,32.1177490060914 192.728879323751,75.153371670158 192.728879323751,124.846628329842 167.882250993909,167.882250993909"
            />
          </Svg>
          <View>
            <Text style={styles.TaskTitle}>{props.data.item.name}</Text>
            <Text style={styles.TaskSubTitle}>
              {props.data.item.project.name} · {props.data.item.date}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.DurationContainer}>
            <Text style={styles.DurationText}>14h</Text>
            <Svg
              width="25"
              height="31"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M4.81812 4.68161C4.99386 4.85734 4.99386 5.14227 4.81812 5.318L3.08632 7.0498H11.9135L10.1817 5.318C10.006 5.14227 10.006 4.85734 10.1817 4.68161C10.3575 4.50587 10.6424 4.50587 10.8181 4.68161L13.3181 7.18161C13.4939 7.35734 13.4939 7.64227 13.3181 7.818L10.8181 10.318C10.6424 10.4937 10.3575 10.4937 10.1817 10.318C10.006 10.1423 10.006 9.85734 10.1817 9.68161L11.9135 7.9498H3.08632L4.81812 9.68161C4.99386 9.85734 4.99386 10.1423 4.81812 10.318C4.64239 10.4937 4.35746 10.4937 4.18173 10.318L1.68173 7.818C1.50599 7.64227 1.50599 7.35734 1.68173 7.18161L4.18173 4.68161C4.35746 4.50587 4.64239 4.50587 4.81812 4.68161Z"
                fill="#6B64FF"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </Svg>
            <Text style={styles.DurationText}>14h:30</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default Task;
