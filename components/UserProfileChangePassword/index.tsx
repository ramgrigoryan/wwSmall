import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const ChangePasswordScreen: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onChangePassword = () => {
    if (password === confirmPassword) {
      setMessage('Password changed successfully');
    } else {
      setMessage('Passwords do not match. Please try again.');
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
        disabled={!password || password !== confirmPassword}
      />
      {message !== '' && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '60%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "rgb(155, 199, 231)"
  },
  message: {
    color: 'green', 
    marginTop: 10,
  },
});

export default ChangePasswordScreen;





  