import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import colors from '../styles/colors';
import userImg from "../assets/perfil.jpeg";
import fonts from '../styles/fonts';
// import { Container } from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
       
       <View>
        <Text style={styles.greeting}> Olá, </Text>
        <Text style={styles.nameUser}> Arnaldo </Text>
       </View>

        <Image source={userImg} style={styles.imgUser}/>
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
  imgUser:{
    width:80,
    height:80,
    borderRadius: 40,
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
  }
})
export default Header;