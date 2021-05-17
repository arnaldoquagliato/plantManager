import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import deafultImage from "../assets/defaultImage.png";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [iconPlus, setIconPlus] = useState(false)
  const handlePressIn = () => {
    setIconPlus(true)
  }
  const handlePressOut = () => {
    setIconPlus(false)
  }
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={[
        styles.imageButton, 
        image ? {borderWidth: 0} : {}
      ]} onPress={pickImage} onPressIn={handlePressIn} onPressOut={handlePressOut}>
          {image ? <Image source={{uri: image}} style={styles.imgUser}/> : <Ionicons name="ios-person-add" size={40} color="black" iconStyle={styles.icon}/>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imgUser:{
    width:80,
    height:80,
    borderRadius: 40,
  },
  imageButton:{
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 40,
    padding: 8,
    textAlign: 'center',
  }
})