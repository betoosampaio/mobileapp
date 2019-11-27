import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet, StatusBar, FlatList, ScrollView, Image } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from "react-native-elements";
import CardView from 'react-native-cardview'



import DestaquesList from './Components/DestaquesList'
import EspecialidadeList from './Components/EspecialidadeList'
import SegmentoList from './Components/SegmentoList'
import { bold } from "colorette";


const DATA = [
  {
    imageUrl: "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
    title: 'Burguer King',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "R$50/R$75",
  },
  {
    imageUrl: "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
    title: 'MC Donalds',
    nota: '4.5',
    especialidade: "Lanches",
    distancia: "12 km",
     valrmedio: "R$50/R$75",
  },
  {
    imageUrl: "https://st2.depositphotos.com/8301258/11963/v/950/depositphotos_119634318-stock-illustration-restaurant-logo-cutlery-design.jpg",
    title: 'OutBack',
    nota: '3.5',
    especialidade: "Lanches",
    distancia: "12 km",
     valrmedio: "R$50/R$75",
  },
  {
    imageUrl: "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
    title: 'Barzinho',
    nota: '2.5',
    especialidade: "Lanches",
    distancia: "12 km",
     valrmedio: "R$50/R$75",
  },
  {
    imageUrl: "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
    title: 'Sushi',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
     valrmedio: "R$50/R$75",
  },
  {
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0e/67/7b/4c/el-retiro.jpg",
    title: 'Japones',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
     valrmedio: "R$50/R$75",
  },
  {
    imageUrl: "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
    title: 'Siga La Vaca',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
     valrmedio: "R$50/R$75",
  },
  {
    imageUrl: "https://st2.depositphotos.com/8301258/11963/v/950/depositphotos_119634214-stock-illustration-restaurant-logo-cutlery-design.jpg",
    title: 'Espoleto',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
     valrmedio: "R$50/R$75",
  },
  {
    imageUrl: "https://png.pngtree.com/templates_detail/20180809/restaurant-logos-png-png_25706.jpg",
    title: 'Ragazzo',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
     valrmedio: "R$50/R$75",
  },
  {
    imageUrl: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2011%2F04%2F14%2F13%2FWDL-Logo-3190_12632_035342767_306610178.jpg",
    title: 'Habibs',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
     valrmedio: "R$50/R$75",
  },



];



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

  teste: {

    marginBottom: 120,
    backgroundColor: '#fff'
  },
  item: {
    marginTop: 20,
    flexDirection: 'row',
    marginVertical: 8,

    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1.2,
    paddingLeft: 10,
    borderColor: '#d6d7da',
  },
  title: {
    marginLeft: 15,
    fontWeight: 'bold',
    flexDirection: 'row',

  },
  textoDestaque: {
    marginTop: 10,
    color: '#000',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  star: {
    marginTop: 10,
    marginLeft: 20,
  },
  nota: {
    marginLeft: 5,
  },
  especialidadetexto: {
    color: '#000',
    fontSize:13,
  },
});

function Item({ title, imageUrl, nota, especialidade, distancia, valrmedio }) {
  return (
    <View style={styles.item}>


      <Image
        source={{ uri: imageUrl }}
        style={{ width: 70, height: 70, }}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Icon style={styles.star} name="star" size={16} color="#FF8C00"> {'' + nota} <Text style={styles.especialidadetexto} >{especialidade} - {distancia} - {valrmedio} </Text>  </Icon>
      </View>



    </View>
  );
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: DATA,
    };
  }

  render() {
    return (




      < SafeAreaView style={styles.Container} >


        <ScrollView>

          <View style={styles.teste}>


            <Text style={styles.textoDestaque}>Restaurantes</Text>

            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item imageUrl={item.imageUrl} title={item.title} nota={item.nota} especialidade={item.especialidade} distancia={item.distancia} valrmedio={item.valrmedio} />}
              keyExtractor={item => item.id}
            />

          </View>


        </ScrollView>



        {/*


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

            */}





      </ SafeAreaView>


    );
  }
}