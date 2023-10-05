import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from "@expo/vector-icons";

const UserProfileDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setSelectedDate(date); 
  };

  return (
    <View style={styles.container}>
       <Text>
        {selectedDate ? selectedDate.toDateString() : "Date of birth"}
      </Text>
      <AntDesign
          name="calendar"
          color="black"
          size={30}
          onPress={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    height: 55,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "rgb(155, 199, 231)"
  },
});

export default UserProfileDatePicker;





  