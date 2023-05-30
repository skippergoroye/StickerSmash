import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';


import PlaceholderImage from './assets/images/background-image.png'
import { useState } from 'react';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });


    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };


  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}  newImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a Photo" picker={pickImageAsync} />
        <Button label="Use this Photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer : {
    flex: 1,
    paddingTop: 58,
  },
  image : {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
