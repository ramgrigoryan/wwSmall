import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

type UserProfileCountryGenderPickerProps = {
  label: string;
  value: string | null;
  onValueChange: (value: string | null) => void;
  items: { label: string; value: string | null }[];
};

const UserProfileCountryGenderPicker = ({
  label,
  value,
  onValueChange,
  items,
}: UserProfileCountryGenderPickerProps) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{}}
        value={value}
        onValueChange={onValueChange}
        items={items}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 120,
    paddingRight: 50,
    backgroundColor: "rgb(155, 199, 231)"
  }
});

export default UserProfileCountryGenderPicker;





  