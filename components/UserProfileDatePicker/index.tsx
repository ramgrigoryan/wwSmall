import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from "@expo/vector-icons";

const UserProfileDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
    <Pressable onPress={showDatePicker}>
      <View style={styles.container}>
        <AntDesign name="calendar" color="black" size={30} />
        <Text>
          {selectedDate ? selectedDate.toLocaleDateString() : "Date of birth"}
        </Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          maximumDate={new Date()}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </Pressable>
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
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "rgb(155, 199, 231)",
  },
});

export default UserProfileDatePicker;
