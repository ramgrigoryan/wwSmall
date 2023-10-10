import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const ChangePasswordScreen: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationStatus, setValidationStatus] = useState<
    "success" | "error" | "uninitialized"
  >("uninitialized");

  const onChangePassword = () => {
    if (password === confirmPassword) {
      setValidationStatus("success");
    } else {
      setValidationStatus("error");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Change Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        style={styles.input}
      />
      <Button
        title="Change Password"
        onPress={onChangePassword}
        disabled={!password}
      />
      {validationStatus === "success" && (
        <Text style={styles.successMessage}>
          Password was successfully changed
        </Text>
      )}
      {validationStatus === "error" && (
        <Text style={styles.invalidMessage}>
          Passwords do not match. Please try again.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "60%",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "rgb(155, 199, 231)",
  },
  successMessage: {
    color: "green",
    marginTop: 10,
  },
  invalidMessage: {
    color: "red",
    marginTop: 10,
  },
});

export default ChangePasswordScreen;
