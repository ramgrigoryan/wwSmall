import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfileImageUpload = () => {

  const selectImage = () => {
    const options = {
      title: 'Select Profile Picture'
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage}>
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







  