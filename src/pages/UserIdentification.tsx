import content from '*.png'
import React, { useState } from 'react'
import {SafeAreaView, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import {Button} from '../components/Button'
import { useNavigation } from '@react-navigation/core'

export function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false)
  const [isFIlled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  const navigation = useNavigation()

  function handleSubimit(){
    navigation.navigate('Confirmation')
  }

  const handleOnBlur = () =>{
    setIsFocused(false)
    setIsFilled(!!name)
  }

  const handleOnFocus = () =>{
    setIsFocused(true)
  }

  const handleInputText = ( value: string) =>{
    setIsFilled(!!value);
    setName(value)
  }
  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' :'height'}
        >
        
        <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                    { isFIlled ? '😀' : '😁'}
                </Text>
                <Text style={styles.title}>
                  Como podemos {'\n'}
                  chamar você?
                </Text>
              </View>
              <TextInput 
                style={[
                  styles.input,
                  (isFocused || isFIlled) && 
                  {
                    borderColor: colors.green
                  }
                ]}
                placeholder="Digite um nome"
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}  
                onChangeText={handleInputText}
                />

              <View style={styles.footer}>
                <Button 
                title= "Confirmar"
                onPress={handleSubimit}
                />
              </View>
            </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content:{
    flex: 1,
    width: '100%',
  },
  header:{
    alignItems:'center'
  },
  form:{
    flex:1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },
  title:{
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.gray,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  input:{
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    width:'100%',
    marginTop: 50,
    padding:10,
    textAlign: 'center'
  },
  emoji:{
    fontSize:44
  },
  footer:{
    width: "100%",
    marginTop: 40,
    paddingVertical: 20
  }
})