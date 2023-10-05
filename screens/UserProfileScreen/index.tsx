import React, { useState, useEffect } from 'react';
import UserProfileItem from "../../components/UserProfileItem/index";
import UserProfileDatePicker from "../../components/UserProfileDatePicker/index";
import UserProfileCountryGenderPicker from '../../components/UserProfileCountryGenderPicker/index';
import UserProfileContacts from '../../components/UserProfileContacts/index';
import UserProfileImageUpload from '../../components/UserProfileImageUpload/index';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileChangePassword from '../../components/UserProfileChangePassword/index';
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

const Stack = createStackNavigator();

const UserProfile = () => {

  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [ssn, setSSN] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);
  const [changesSaved, setChangesSaved] = useState(false);

  useEffect(() => {
    const isValid =
      userName.trim() !== '' && email.trim() !== ''
    setIsFormValid(isValid);
  }, [userName, email]);

  const handleSaveChanges = () => {
    if (!isFormValid) {
      alert('One or more required fields are empty');
    return;
    }
    setChangesSaved(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.button}>
          <AntDesign
            name="checksquareo"
            color="black"
            size={30}
            onPress={handleSaveChanges}
          />
          {changesSaved && (
            <Text style={styles.errorMessage}>Your changes are saved</Text>
          )}
        </View>
        <UserProfileImageUpload /> 
        <UserProfileItem
          placeholder="Name"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          required={true}
        />
        <UserProfileItem
          placeholder="Surname"
          value={userSurname}
          onChangeText={(text) => setUserSurname(text)}
        />
        <UserProfileDatePicker/>
        <UserProfileCountryGenderPicker
          label="Gender"
          value={selectedGender}
          onValueChange={(value) => setSelectedGender(value)}
          items={
            [
              { label: 'Select Gender', value: null },
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ]
          }
        />
        <UserProfileCountryGenderPicker
          label="Country"
          value={selectedCountry}
          onValueChange={(value) => setSelectedCountry(value)}
          items={
            [
              { label: 'Select Country', value: null },
              { label: 'USA', value: 'USA' },
              { label: 'Canada', value: 'Canada' },
              { label: 'UK', value: 'UK' },
              { label: 'Australia', value: 'Australia' },
            ]
          }
        />
        <UserProfileContacts 
          type="ssn" 
          onChangeText={setSSN} 
        />   
        <UserProfileContacts
          type="contacts" 
          onChangeText={setPhone} 
        />
        <UserProfileContacts 
          type="email" 
          onChangeText={setEmail} 
          required={true}
        />
        <UserProfileChangePassword/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    gap: 15
  },
  button: {
    display: "flex",
    alignItems: "flex-end"
  },
  errorMessage: {
    color: "green"
  }
});

export default UserProfile;


  