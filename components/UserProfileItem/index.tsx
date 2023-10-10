import { TextInput, StyleSheet, View, Text } from "react-native";
import _capitalize from "lodash/capitalize";

type UserProfileItemProps = {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  required?: boolean;
};

const UserProfileItem = ({
  placeholder,
  value,
  onChangeText,
  required = false,
}: UserProfileItemProps) => {
  const handleTextChange = (text: string) => {
    const formattedText = _capitalize(text);
    onChangeText(formattedText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="black"
        value={value}
        onChangeText={handleTextChange}
      />
      {required && !value && (
        <Text style={styles.errorText}>This field is required</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "rgb(155, 199, 231)",
  },
  errorText: {
    color: "red",
  },
});

export default UserProfileItem;
