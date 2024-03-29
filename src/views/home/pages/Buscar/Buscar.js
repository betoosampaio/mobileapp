import * as React from 'react';
import {
  Image, Text, Button, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, Alert, View, ErrorMessage
} from 'react-native';
import logo from '../../../../assets/img/logo.png'
import facebook from '../../../../assets/img/icons/facebook.png'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
  }

});


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      correct: true,
    };
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

    if (senha.length < 8) {
      this.setState({ correct: false })
    }
    else {
      this.setState({ correct: true })
    }
  }

  render() {
    const isCorrect = this.state.correct;
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
          style={{ backgroundColor: 'white', borderRadius: 5, marginBottom: 10, width: 300, borderWidth: 1, borderColor: isCorrect ? 'green' : 'red' }}
          placeholderTextColor="#424242"
          onChangeText={(email) => this.checkInputEmail(email)}
          value={this.state.email}
        />


        <Text style={styles.informacao}>Senha:</Text>

        <TextInput
          placeholder="Insira o Sua Senha"
          style={{ backgroundColor: 'white', borderRadius: 5, width: 300, marginBottom: 10, borderWidth: 1, borderColor: isCorrect ? 'green' : 'red' }}
          placeholderTextColor="#424242"
          onChangeText={(senha) => this.checkInputSenha(senha)}
          value={this.state.senha}
        />


        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Details')}  >
          <Text style={styles.buttonText} >Logar</Text>
        </TouchableOpacity>




        <View style={styles.containerImgLogin}>
          <Image
            source={facebook}
            style={styles.iconFace}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.cadastrar1}>Ainda não é cadastrado?   <Text style={styles.cadastrar} onPress={() => this.props.navigation.navigate('DetailsScreen')} >Clique Aqui</Text> </Text>



      </ImageBackground>

    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerTransparent:true,
    }),
  },

  Details: DetailsScreen,

});

export default createAppContainer(RootStack);