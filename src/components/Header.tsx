import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from '../styles/colors';
import userImg from "../assets/perfil.jpeg";
import fonts from '../styles/fonts';
import ImagePicker from '../components/ImagePicker'
// import { Container } from './styles';

const Header = () => {
  const [userName, setUserName] = useState<string>();
  
  useEffect(() => {
    async function loadLocalStorage() {
      const user = await AsyncStorage.getItem('@plantManager:user')

      setUserName(user || '')
    }
    loadLocalStorage()
  }, [])
  return (
    <View style={styles.container}>
       <View>
        <Text style={styles.greeting}> Olá, </Text>
        <Text style={styles.nameUser}> {userName} </Text>
       </View>

        <ImagePicker />
        
    </View>);
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginTop: 40,
  },
  greeting:{
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.heading,
  },
  nameUser:{
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
})
export default Header;