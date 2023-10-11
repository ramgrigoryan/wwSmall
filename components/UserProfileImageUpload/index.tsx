import { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const UserProfileImageUpload = () => {
  const [response, setResponse] = useState(null);
  console.log({ response });

  const onButtonPress = useCallback(() => {
    ImagePicker.launchImageLibrary({
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra: true,
      },
      setResponse
    ).catch((e) => {
      // Here I got an error: TypeError: Cannot read property 'launchImageLibrary' of null
      // Could you please check if the same happens on your side, Vahram ?
      console.log('error caught');
      console.log(e);
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress}>
        <Text style={styles.placeholder}>Select a profile picture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: 150, 
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(155, 199, 231)", 
    borderWidth: 2,
    borderRadius: 100,  
    borderColor: 'black',
  },
  placeholder: {
    fontSize: 16,
    color: 'gray',
  },
});

export default UserProfileImageUpload;