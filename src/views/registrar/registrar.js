import React, { Component } from "react";
import PasswordInputText from 'react-native-hide-show-password-input';
import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, Alert, View

} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  cadastrar: {
    marginTop: 50,
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
  informacao: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 260,
  },
  informacaotel: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 235,
  },
  informacaocpf: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 285,
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
export default class Registrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeUsuario: '',
      cpfUsuario: '',
      telefone: '',
      email: '',
      senha: '',
    };
  }

  render() {
    return (

      <ScrollView>
        <ImageBackground
          source={{
            uri: 'https://www.colorhexa.com/7159c1.png',
          }}
          style={styles.container}
          resizeMode="cover"
        >
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />


          <Text style={styles.cadastrar}>Cadastrar</Text>

          <Text style={styles.informacao}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Qual é o seu nome ?"
          />
          <Text style={styles.informacaocpf}>CPF:</Text>
          <TextInputMask
            style={styles.input}
            placeholder="Qual é o seu CPF ?"
            keyboardType={'numeric'}
            mask={"[000].[000].[000]-[00]"}
          />
          <Text style={styles.informacaotel}>Telefone:</Text>
          <TextInputMask
            style={styles.input}
            placeholder="E o seu Telefone?"
            keyboardType={'numeric'}
            mask={"([00]) [00000]-[0000]"}
          />
          <Text style={styles.informacao}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o Seu E-mail"
          />
          <Text style={styles.informacao}>Senha:</Text>

          <View>

            <TextInput
              style={styles.inputpass}
              placeholder="Insira o Seu E-Senha"
            >

              <Icon name="eye" size={20} style={styles.eye} />
            </TextInput>





          </View>



          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>





        </ImageBackground>
      </ScrollView>
    );
  }
}