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
      nome: '',
      cpf: '',
      telefone: '',
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
  checkInputCPF(cpf) {
    this.setState({ cpf })
  }
  checkInputNome(nome) {
    this.setState({ nome })
  }
  checkInputTelefone(telefone) {
    this.setState({ telefone })
  }



  Cadastrar = () => {

    let res = fetch('http://192.168.0.12:3333/user/cadastro', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })

      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson == 'ok') {
          alert("Successfully Login");
          console.log('ok')
        } else {
          alert("Usuário invalido");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
            onChangeText={(nome) => this.checkInputNome(nome)}
            style={styles.input}
            placeholder="Qual é o seu nome ?"
            value={this.state.nome}
          />
          <Text style={styles.informacaocpf}>CPF:</Text>
          <TextInputMask
            onChangeText={(cpf) => this.checkInputCPF(cpf)}
            value={this.state.cpf}
            style={styles.input}
            placeholder="Qual é o seu CPF ?"
            keyboardType={'numeric'}
            mask={"[000].[000].[000]-[00]"}
          />
          <Text style={styles.informacaotel}>Telefone:</Text>
          <TextInputMask
            onChangeText={(telefone) => this.checkInputTelefone(telefone)}
            value={this.state.telefone}
            style={styles.input}
            placeholder="E o seu Telefone?"
            keyboardType={'numeric'}
            mask={"[00000]"}
          />
          <Text style={styles.informacao}>E-mail:</Text>
          <TextInput
            onChangeText={(email) => this.checkInputEmail(email)}
            style={styles.input}
            value={this.state.email}
            placeholder="Insira o Seu E-mail"
          />
          <Text style={styles.informacao}>Senha:</Text>

          <TextInput
            onChangeText={(senha) => this.checkInputSenha(senha)}
            style={styles.input}
            value={this.state.senha}
            placeholder="Insira o Seu E-mail"
          />



          <TouchableOpacity style={styles.button} onPress={this.Cadastrar}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>





        </ImageBackground>
      </ScrollView>
    );
  }
}