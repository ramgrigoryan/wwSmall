import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type UserDataPickerProps = {
  placeholder: string;
  value?: string;
  items: { label: string; value: string }[];
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
};

const UserDataPicker = ({
  value,
  items,
  placeholder,
  setSelectedValue,
}: UserDataPickerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      multiple={false}
      placeholder={placeholder}
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setSelectedValue}
      items={items}
      listMode="SCROLLVIEW"
      dropDownDirection="TOP"
      style={styles.dropdownPicker}
      placeholderStyle={styles.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  dropdownPicker: {
    height: 55,
    backgroundColor: "rgb(155, 199, 231)",
    borderWidth: 2,
    flexDirection: "row",
    alignContent: "center",
  },
  placeholder: {
    textAlign: "center",
  },
});

export default UserDataPicker;
