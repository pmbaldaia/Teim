import {View, Text, StyleSheet, Platform} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import {Agenda} from 'react-native-calendars';
import {DateTime} from 'luxon';

const Calendar = () => {
  const [items, setItems] = useState({});

  const now = DateTime.now().setLocale('pt').toISODate();

  console.log(now);

  const styles = StyleSheet.create({
    mainContainer: {flex: 1, marginVertical: Platform.OS === 'ios' ? '17%' : 0},
  });

  const timeToString = time => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const loadItems = day => {
    const itemsToLoad = items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!itemsToLoad[strTime]) {
          itemsToLoad[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            itemsToLoad[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = itemsToLoad[key];
      });
      setItems(newItems);
    }, 1000);
  };

  return (
    <View style={styles.mainContainer}>
      <Header headerText={'Calendário'} />
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={now}
        theme={{
          agendaDayTextColor: '#141414',
          agendaDayNumColor: '#141414',
          agendaTodayColor: '#6B64FF',
          agendaKnobColor: '#6B64FF',
          textDayFontFamily: 'PPNeueMontreal-SemiBold',
          textMonthFontFamily: 'PPNeueMontreal-Bold',
          todayButtonFontFamily: 'PPNeueMontreal-Bold',
          textDayHeaderFontFamily: 'PPNeueMontreal-Bold',
          calendarBackground: '#141414',
          selectedDayBackgroundColor: '#141414',
          backgroundColor: '#141414',
        }}
      />
    </View>
  );
};

export default Calendar;
