import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import DestaquesList from './Components/DestaquesList'
import EspecialidadeList from './Components/EspecialidadeList'
import SegmentoList from './Components/SegmentoList'
import RestauranteProximos from './Components/RestauranteProximos'



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  Menu: {
    backgroundColor: '#7159c1',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  qrCode: {
    color: '#fff',
    marginLeft: 80,

  },
  TextoHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
  },
  viewhr: {
    backgroundColor: '#fff',
    opacity: 50,
  },
  hr: {
    marginLeft: 16,
    marginTop: 10,
    opacity: 0.2,
  },
});


export default class Home extends Component {


  render() {
    return (

      < SafeAreaView style={styles.Container} >

        <View style={styles.Menu} >
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <Text style={styles.TextoHeader}>Bem vindo a FreedAPP</Text>
          <Icon name="qrcode" size={33} style={styles.qrCode} />
        </View>

        <View>

          <SearchBar
            placeholder="Busque por restaurante"
            platform="android"
          />

        </View>

        <ScrollView>

          <SegmentoList />

          <DestaquesList />


          <View style={styles.viewhr}>
            <Text style={styles.hr}> ────────────────────────────────</Text>
          </View>


          <EspecialidadeList />


          <RestauranteProximos />


        </ScrollView>


      </ SafeAreaView>
      

    );
  }
}