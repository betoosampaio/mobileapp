import React, { Component } from "react";
import PasswordInputText from 'react-native-hide-show-password-input';
import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, Alert, View

} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { HelperText } from 'react-native-paper';

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
      validNome: true,
      validCpf: true,
      validTelefone: true,
      validEmail: true,
      validSenha: true,
    };
  }

  testarCPF = (strCPF) => {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF === "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  checkInputNome(nome) {
    this.setState({ nome })

    if (nome.length < 3) {
      this.setState({ validNome: false })
    }
    else {
      this.setState({ validNome: true })
    }

  }

  checkInputCPF(cpf) {
    let val = cpf.replace(/\D/g, '');
    this.setState({ val })

    if (!this.testarCPF(val)) {
      this.setState({ validCpf: false })
    }
    else {
      this.setState({ validCpf: true })
    }

  }

  checkInputTelefone(telefone) {
    this.setState({ telefone })

    if (telefone.length < 3) {
      this.setState({ validTelefone: false })
    }
    else {
      this.setState({ validTelefone: true })
    }

  }

  checkInputEmail(email) {
    this.setState({ email })

    if (!email.includes('@')) {
      this.setState({ correct: false })
    }
    else {
      this.setState({ correct: true })
    }
  }

  checkInputSenha(senha) {
    this.setState({ senha })

    if (senha.length < 3) {
      this.setState({ validSenha: false })
    }
    else {
      this.setState({ validSenha: true })
    }

  }


  Cadastrar = () => {

    let res = fetch('http://192.168.0.11:3333/user/cadastro', {
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
    const isCorrectNome = this.state.validNome;
    const isCorrectCpf = this.state.validCpf;
    const isCorrectTelefone = this.state.validTelefone;
    const isCorrectEmail = this.state.validEmail;
    const isCorrectSenha = this.state.validSenha;
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
            style={{ backgroundColor: 'white', borderRadius: 5, marginBottom: 10, marginTop: 10, width: 330, borderWidth: 1, borderColor: isCorrectNome ? 'green' : 'red' }}
            placeholder="Qual é o seu nome ?"
            value={this.state.nome}
          />


          {this.state.validNome == false &&
            <HelperText
              style={{ marginRight: 240, fontWeight: 'bold', }}


              type="error"
              visible={true}
            >
              Nome Invalido
        </HelperText>
          }


          <Text style={styles.informacaocpf}>CPF:</Text>
          <TextInputMask
            onChangeText={(cpf) => this.checkInputCPF(cpf)}
            value={this.state.cpf}
            style={{ backgroundColor: 'white', borderRadius: 5, marginTop: 10, marginBottom: 10, width: 330, borderWidth: 1, borderColor: isCorrectCpf ? 'green' : 'red' }}
            placeholder="Qual é o seu CPF ?"
            keyboardType={'numeric'}
            mask={"[000].[000].[000]-[00]"}
          />

          {this.state.validCpf == false &&
            <HelperText
              style={{ marginRight: 240, fontWeight: 'bold', }}
              type="error"
              visible={true}
            >
              CPF Invalido
        </HelperText>
          }



          <Text style={styles.informacaotel}>Telefone:</Text>
          <TextInputMask
            onChangeText={(telefone) => this.checkInputTelefone(telefone)}
            value={this.state.telefone}
            style={{ backgroundColor: 'white', borderRadius: 5, marginTop: 10, marginBottom: 10, width: 330, borderWidth: 1, borderColor: isCorrectNome ? 'green' : 'red' }}
            placeholder="E o seu Telefone?"
            keyboardType={'numeric'}
            mask={"([00]) [00000] - [0000]"}
          />

          {this.state.nome.includes('@') &&
            <HelperText
              type="error"
              visible={true}
            >
              Email address is invalid!
        </HelperText>
          }



          <Text style={styles.informacao}>E-mail:</Text>
          <TextInput
            onChangeText={(email) => this.checkInputEmail(email)}
            style={{ backgroundColor: 'white', borderRadius: 5, marginTop: 10, marginBottom: 10, width: 330, borderWidth: 1, borderColor: isCorrectNome ? 'green' : 'red' }}
            value={this.state.email}
            placeholder="Insira o Seu E-mail"
          />


          {this.state.nome.includes('@') &&
            <HelperText
              type="error"
              visible={true}
            >
              Email address is invalid!
        </HelperText>
          }



          <Text style={styles.informacao}>Senha:</Text>
          <TextInput
            onChangeText={(senha) => this.checkInputSenha(senha)}
            style={{ backgroundColor: 'white', borderRadius: 5, marginTop: 10, marginBottom: 10, width: 330, borderWidth: 1, borderColor: isCorrectNome ? 'green' : 'red' }}
            value={this.state.senha}
            placeholder="Insira o Seu E-mail"
          />


          {this.state.nome.includes('@') &&
            <HelperText
              type="error"
              visible={true}
            >
              Email address is invalid!
        </HelperText>
          }




          <TouchableOpacity style={styles.button} onPress={this.Cadastrar}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>





        </ImageBackground>
      </ScrollView>
    );
  }
}