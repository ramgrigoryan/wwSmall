import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, KeyboardTypeOptions } from 'react-native';

type UserDataInputProps = {
  type: 'ssn' | 'contacts' | 'email';
  onChangeText: (text: string) => void;
  required?: boolean;
}

type InputType = {
  type: string;
  keyboardType: KeyboardTypeOptions;
  placeholder: string;
};

const inputTypes: InputType[] = [
  {
    type: 'ssn',
    keyboardType: 'numeric',
    placeholder: 'SSN',
  },
  {
    type: 'contacts',
    keyboardType: 'numeric',
    placeholder: 'Phone number',
  },
  {
    type: 'email',
    keyboardType: 'email-address',
    placeholder: 'Email address',
  },
];


const UserDataInput = ({ 
  type, 
  onChangeText,
  required = false,
}: UserDataInputProps) => {
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

  const inputType = inputTypes.find(item => item.type === type);
  const keyboardType = inputType?.keyboardType || 'default';
  const placeholder = inputType?.placeholder || '';

  const validateEmail = (email: string) => {
    return email.includes('@');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={handleTextChange}
        placeholder={placeholder}
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

export default UserDataInput;







  