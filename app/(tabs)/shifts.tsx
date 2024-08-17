import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

const sampleShifts = [
  { id: 1, name: 'Adam', startDate: '2023-08-17', startTime: '09:00', endTime: '17:00', status: 'completed' },
  { id: 2, name: 'Chris', startDate: '2023-08-18', startTime: '10:00', endTime: '18:00', status: 'pending' },
  { id: 3, name: 'Zoe', startDate: '2023-08-19', startTime: '08:00', endTime: '16:00', status: 'completed' },
];

const ShiftManagementPage = () => {
  const [calendarHeight, setCalendarHeight] = useState(200);
  const [selectedDate, setSelectedDate] = useState('');

  const onPanGestureEvent = (event) => {
    const { translationY } = event.nativeEvent;
    const newHeight = Math.max(200, Math.min(400, calendarHeight + translationY));
    setCalendarHeight(newHeight);
  };

  const renderShiftCard = (shift) => (
    <View key={shift.id} style={styles.shiftCard}>
      <Text style={styles.employeeName}>{shift.name}</Text>
      <Text>{`Date: ${shift.startDate}`}</Text>
      <Text>{`Time: ${shift.startTime} - ${shift.endTime}`}</Text>
      <Text style={shift.status === 'completed' ? styles.completed : styles.pending}>
        {shift.status === 'completed' ? 'Complete' : 'Incomplete'}
      </Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={onPanGestureEvent}>
        <View style={[styles.calendarContainer, { height: calendarHeight }]}>
          <Calendar
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: 'blue' },
            }}
          />
        </View>
      </PanGestureHandler>
      <ScrollView style={styles.shiftsContainer}>
        {sampleShifts.map(renderShiftCard)}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendarContainer: {
    minHeight: 200,
    maxHeight: 400,
  },
  shiftsContainer: {
    flex: 1,
    padding: 10,
  },
  shiftCard: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 3,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  completed: {
    color: 'green',
  },
  pending: {
    color: 'orange',
  },
});

export default ShiftManagementPage;