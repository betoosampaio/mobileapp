import React, { Component } from "react";
import {
  Image, Text, ScrollView, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, Alert, View, ErrorMessage
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../../assets/img/logo.png'
import facebook from '../../../assets/img/icons/facebook.png'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TextInput } from 'react-native-gesture-handler';
import { StackNavigator } from 'react-navigation';


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

  buttonStyle: {
    marginTop: 200,
  },
  cadastrar2: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  containerImgLogin: {
    marginTop: 50,
    flexDirection: 'row',
    marginBottom: 40
  },
  button: {
    marginTop: 20,
    width: 280,
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cadastrar1: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },


  cadastrar3: {
    marginTop: 10,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginBottom: 10,
    width: 330
  },
  inputpass: {

    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginBottom: 10,
    width: 330
  },
  informacaos: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 250,
  },
  informacaotel: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 226,
  },
  informacaocpf: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 273,
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
    width: 280,
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  eye: {
    marginLeft: 285,
  },

});


export default class Login extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  checkInputEmail(email) {
    this.setState({ email })
  }
  checkInputSenha(senha) {
    this.setState({ senha })
  }




  logar = () =>{
    
   let res =  fetch('http://192.168.0.12:3333/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })

    .then((response) => response.json())
    .then((responseJson)=>{
      if(responseJson == 'ok'){
        alert("Successfully Login");
        this.props.navigation.navigate('Details')
      }else{
        alert("Usuário invalido");
      }
    })
    .catch((error)=>{
    console.error(error);
    });
   }
  



  render() {

    return (
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
          placeholder="Insira o Seu E-mail"
          style={{ backgroundColor: 'white', borderRadius: 5, marginBottom: 10, width: 300, borderWidth: 1, }}
          placeholderTextColor="#424242"
          onChangeText={(email) => this.checkInputEmail(email)}
          value={this.state.email}
        />


        <Text style={styles.informacao}>Senha:</Text>

        <TextInput
          placeholder="Insira o Sua Senha"
          style={{ backgroundColor: 'white', borderRadius: 5, width: 300, marginBottom: 10, borderWidth: 1, }}
          placeholderTextColor="#424242"
          onChangeText={(senha) => this.checkInputSenha(senha)}
          value={this.state.senha}
        />


        <TouchableOpacity style={styles.button} onPress={this.logar}  >
          <Text style={styles.buttonText} >Logar</Text>
        </TouchableOpacity>




        <View style={styles.containerImgLogin}>
          <Image
            source={facebook}
            style={styles.iconFace}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.cadastrar1}>Ainda não é cadastrado?   <Text style={styles.cadastrar2} onPress={() => this.props.navigation.navigate('Registrar')} >Clique Aqui</Text> </Text>



      </ImageBackground>

    );
  }
}
