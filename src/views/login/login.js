import React from 'react';
import logo from '../../assets/img/logo.png'
import facebook from '../../assets/img/icons/facebook.png'
import google from '../../assets/img/icons/google.png'
import { StackNavigator } from "react-navigation";
import Registrar from '../registrar/registrar'

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, Alert, View

} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  iconFace: {
    height: 50,
    width: 50,
  },
  informacao: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 230,
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginBottom: 10,
    width: 300
  },
  buttonStyle: {
    marginTop: 200,
  },
  cadastrar: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  containerImgLogin: {
    marginTop: 50,
    flexDirection: 'row',
    marginBottom: 40
  },
  button:{
    marginTop:20,
    width:280,
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 2,
  },
  buttonText:{
    color: '#fff',
    fontWeight:'bold',
    fontSize:16,
  },
  cadastrar1:{
    color: '#000',
    fontWeight:'bold',
    fontSize:16,
  }

});

const Main = ({navigation}) => (
  
  <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Image
      source={logo}
      style={styles.logo}
      resizeMode="contain"
    />


    <Text style={styles.informacao}>E-mail:</Text>

    <TextInput
      style={styles.input}
      placeholder="Insira o Seu E-mail"
    />

    <Text style={styles.informacao}>Senha:</Text>
    <TextInput
      style={styles.input}
      placeholder="Insira o Sua Senha"
    />

    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home') } >
      <Text  style={styles.buttonText} >Logar</Text>
    </TouchableOpacity>

    <View style={styles.containerImgLogin}>
      <Image
        source={facebook}
        style={styles.iconFace}
        resizeMode="contain"
      />
    </View>

    <Text style={styles.cadastrar1}>Ainda não é cadastrado?   <Text style={styles.cadastrar} onPress={() => navigation.navigate('Registrar') } >Clique Aqui</Text> </Text>



  </ImageBackground>
);

export default Main;