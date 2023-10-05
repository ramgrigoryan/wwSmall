import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

type UserProfileContactsProps = {
  type: 'ssn' | 'contacts' | 'email';
  onChangeText: (text: string) => void;
  required?: boolean;
}

const UserProfileContacts = ({ 
  type, 
  onChangeText,
  required = false,
}: UserProfileContactsProps) => {
  const [value, setValue] = useState('');
  const [showEmailError, setShowEmailError] = useState(false); 

  const handleTextChange = (text: string) => {
    let formattedText = text;
    if (type === 'ssn' || type === 'contacts') {
      formattedText = text.replace(/[^0-9]/g, '');
    } 

    setValue(formattedText);
    onChangeText(formattedText);

    if (type === 'email') {
      setShowEmailError(text !== '' && !validateEmail(text));
    }
  };

  const keyboardType = type === 'ssn' || type === 'contacts' ? 'numeric' : 'default';

  const validateEmail = (email: string) => {
    return email.includes('@');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={handleTextChange}
        placeholder={type === 'ssn' ? 'SSN' : type === 'contacts' ? 'Contacts' : 'Email adress'}
        placeholderTextColor="black"
          keyboardType={keyboardType}
      />
       {required && !value && (
          <Text style={styles.errorText}>This field is required</Text>
      )}
      {type === 'email' && showEmailError && (
        <Text style={styles.errorText}>Invalid email address</Text>
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
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "rgb(155, 199, 231)"
  },
  errorText: {
    color: 'red',
  },
});

export default UserProfileContacts;







  