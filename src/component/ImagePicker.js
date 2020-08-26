import {StyleSheet, Text, View, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import React, {useState} from 'react';
const ImagePickers = () => {
  const [pickedImage, setPickedImage] = useState(null);

  pickImageHandler = () => {
    const options = {
      title: 'Pick an Image',
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled!');
      } else if (response.error) {
        console.log('Error', response.error);
      } else {
        console.log('res==>' + response.uri + '');
        setPickedImage(response.uri);
      }
    });

    // // Launch Camera:
    // ImagePicker.launchCamera(options, (response) => {
    //   // Same code as in above section!
    // });

    // // Open Image Library:
    // ImagePicker.launchImageLibrary(options, (response) => {
    //   // Same code as in above section!
    // });
  };
  resetHandler = () => {
    setPickedImage(null);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Pick Image From Camera and Gallery </Text>
      <View style={styles.placeholder}>
        <Image source={{uri: pickedImage}} style={styles.previewImage} />
      </View>
      <View style={styles.button}>
        <Button title="Pick Image" onPress={pickImageHandler} />

        <Button title="Reset" onPress={resetHandler} />
      </View>
    </View>
  );
};

export default ImagePickers;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 100,
  },
  button: {
    width: '80%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});
