import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';




const RestauranteProximos = [
  {
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0d/a6/9f/e8/logo.jpg",
    title: 'Burguer King',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "20",
  },
  {
    imageUrl: "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
    title: 'MC Donalds',
    nota: '4.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "30"
  },
  {
    imageUrl: "https://st2.depositphotos.com/8301258/11963/v/950/depositphotos_119634318-stock-illustration-restaurant-logo-cutlery-design.jpg",
    title: 'OutBack',
    nota: '3.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "40"
  },
  {
    imageUrl: "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
    title: 'Barzinho',
    nota: '2.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "80"
  },
  {
    imageUrl: "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
    title: 'Sushi',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "100"
  },
  {
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0e/67/7b/4c/el-retiro.jpg",
    title: 'Japones',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "10"
  },
  {
    imageUrl: "https://seeklogo.com/images/C/casa-sua-restaurante-logo-0A623207BE-seeklogo.com.jpg",
    title: 'Siga La Vaca',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "20"
  },
  {
    imageUrl: "https://st2.depositphotos.com/8301258/11963/v/950/depositphotos_119634214-stock-illustration-restaurant-logo-cutlery-design.jpg",
    title: 'Espoleto',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "25"
  },
  {
    imageUrl: "https://png.pngtree.com/templates_detail/20180809/restaurant-logos-png-png_25706.jpg",
    title: 'Ragazzo',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "60"
  },
  {
    imageUrl: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2011%2F04%2F14%2F13%2FWDL-Logo-3190_12632_035342767_306610178.jpg",
    title: 'Habibs',
    nota: '5.5',
    especialidade: "Lanches",
    distancia: "12 km",
    valrmedio: "75"
  },

];


const styles = StyleSheet.create({
  ViewRestaurantes: {

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
    fontSize: 13,
  },
valorMedio:{
  color: '#1212'
}

});




function Item({ title, imageUrl, nota, especialidade, distancia, valrmedio }) {

  let valor = () => {
    if (valrmedio <= 20) {
      return <Text > $<Text style={styles.valorMedio}>$$$$</Text></Text>
    } else if (valrmedio <= 40) {
      return <Text> $$<Text style={styles.valorMedio}>$$$</Text></Text>
    } else if (valrmedio <= 60) {
      return <Text> $$$<Text style={styles.valorMedio}>$$</Text></Text>
    } else if (valrmedio <= 80) {
      return <Text> $$$$<Text style={styles.valorMedio}>$</Text></Text>
    } else if (valrmedio > 81) {
      return <Text> $$$$$</Text>
    }



  };

  return (

    <View style={styles.item}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 70, height: 70, }}
      />
      <View>
        <Text style={styles.title}>{title}</Text>

        <Icon
          style={styles.star}
          name="star" size={16}
          color="#FF8C00">
          {'' + nota}
          <Text style={styles.especialidadetexto}>

            {' ' + especialidade + ' '}
            -
                   {' ' + distancia + ' '}
            -
                   {valor()}

          </Text>  </Icon>


      </View>
    </View>
  );

}


export default class RestauranteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RestauranteProximos: RestauranteProximos,
    };
  }

  render() {
    return (

      <View style={styles.ViewRestaurantes}>


        <Text style={styles.textoDestaque}>Restaurantes</Text>

        <FlatList
          data={RestauranteProximos}
          renderItem={({ item }) => <Item imageUrl={item.imageUrl} title={item.title} nota={item.nota} especialidade={item.especialidade} distancia={item.distancia} valrmedio={item.valrmedio} />}
          keyExtractor={item => item.id}
        />

      </View>


    );
  }
}