import React from 'react';
import { View, Image, Dimensions, StatusBar } from 'react-native';
import logo from '../../../assets/img/logo.png'

class SplashScreen extends React.Component {

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Login');
    }

  }

  render() {
    return (



      <View style={styles.viewStyles}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Image
          source={logo}
          style={styles.logo}
          resizeMode="contain"
        />

      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7159c1'
  },
  logo: {
    marginLeft: 20,
    marginBottom: 80,
    height: Dimensions.get('window').height * 0.20,
  }
}

export default SplashScreen;