import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from "react-native-elements";
import CardView from 'react-native-cardview'



const SegimentoFreed = [
  {
    imageUrl: "https://maringapost.com.br/wp-content/uploads/2018/07/galpao-tropeiro.png",
    title: "Rodizio"
  },
  {
    imageUrl: "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000jbsJXMAY/59aeb72ce4b0f171da93a10e.jpg",
    title: "À la carte"
  },
  {
    imageUrl: "https://abrilexame.files.wordpress.com/2017/07/festa-e1520603959879.jpg",
    title: "Balada"
  },
];

const informacoesFreed = [
  {
    imageUrl: "https://webrobotapps.com/wp-content/uploads/2016/08/app-comida.jpg"
  },
  {
    imageUrl: "https://gmconline.com.br/uploads/cdfa29018550b3cd3d839afd4504f634.jpg"
  },
  {
    imageUrl: "https://apidiag276.blob.core.windows.net/api/portal/2016/10/comida-artesanal.jpg"
  },
  {
    imageUrl: "https://www.folhaz.com.br/wp-content/uploads/2017/10/oktoberfest-natur-bier.jpg"
  },
  {
    imageUrl: "https://diaonline.com.br/wp-content/uploads/2018/10/festival-alemao-do-gloria-e-inspirado-na-oktoberfest.jpg"
  }
];

const especialidade = [
  {
    imageUrl: "https://definicao.net/wp-content/uploads/2019/03/sushi-3-810x537.jpg",
    title: "Japonesa"
  },
  {
    imageUrl: "https://meubistro.com/blog/wp-content/uploads/2019/07/comida-mexicana.jpg",
    title: "Mexicana"
  },
  {
    imageUrl: "https://img.itdg.com.br/tdg/images/blog/uploads/2017/01/shutterstock_283021049.jpg",
    title: "Italiana"
  },
  {
    imageUrl: "https://s2.glbimg.com/IaEnP49buSdSUDftlMxVrq3-ZDo=/940x523/e.glbimg.com/og/ed/f/original/2019/04/26/loucosporti1.jpg",
    title: "Hamburgueria"
  },
  {
    imageUrl: "https://supermercadosrondon.com.br/guiadecarnes/images/postagens/qual__o_ponto_ideal_para_carnes_2019-08-21.jpg",
    title: "Carnes"
  },
  {
    imageUrl: "https://www.viagemegastronomia.com.br/wp-content/uploads/2018/07/dia-da-pizza-home-destaque.jpg",
    title: "Pizzaria"
  }
];

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  ContainerMenu: {
    backgroundColor: '#7159c1',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  qrCode: {
    color: '#fff',
    marginLeft: 80,

  },
  Destaques: {
    backgroundColor: '#fff',
  },
  textoDestaque: {
    color: '#000',
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  TextoHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
  },

  SegimentoHeader: {
    height: 135,
    backgroundColor: '#fff',
  },
  DestaquesView: {
    height: 170,
    backgroundColor: '#fff',
  },
  BaseMedium: {
    height: 140,
    backgroundColor: '#fff'
  },

});





export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informacoesFreed: informacoesFreed,
      especialidade: especialidade,
      SegimentoFreed: SegimentoFreed,
    };
  }

  render() {
    return (

      < View style={styles.Container} >


      <View>


        <View style={styles.ContainerMenu} >
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

      </View>


     <View>

        <ScrollView>


          <View style={styles.SegimentoHeader}>

            <FlatList
              horizontal
              data={this.state.SegimentoFreed}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item: rowData }) => {
                return (
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    style={styles.Card}
                    containerStyle={{ height: 20, width: 90 }}
                    imageStyle={{ height: 90, width: 90 }}

                  >
                    <Text style={{ textAlign: "center" }}>
                      {rowData.title}
                    </Text>
                  </Card>
                );
              }}
              keyExtractor={(item, index) => index}
            />


          </View>






          <View style={styles.DestaquesView} >

            <Text style={styles.textoDestaque}>Destaques</Text>

            <FlatList
              horizontal
              data={this.state.informacoesFreed}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item: rowData }) => {
                return (
                  <Card
                    image={{ uri: rowData.imageUrl }}
                    containerStyle={{ height: 100, width: 250 }}
                  >
                  </Card>
                );
              }}

            />

          </View>



          <View style={styles.BaseMedium}>

            <FlatList
              horizontal
              data={this.state.especialidade}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item: rowData }) => {
                return (
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    style={styles.Card}
                    containerStyle={{ height: 20, width: 90 }}
                    imageStyle={{ height: 90, width: 90 }}

                  >
                    <Text style={{ textAlign: "center" }}>
                      {rowData.title}
                    </Text>
                  </Card>
                );
              }}
              keyExtractor={(item, index) => index}
            />


          </View>
          <View style={styles.BaseMedium}>

            <FlatList
              horizontal
              data={this.state.especialidade}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item: rowData }) => {
                return (
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    style={styles.Card}
                    containerStyle={{ height: 20, width: 90 }}
                    imageStyle={{ height: 90, width: 90 }}

                  >
                    <Text style={{ textAlign: "center" }}>
                      {rowData.title}
                    </Text>
                  </Card>
                );
              }}
              keyExtractor={(item, index) => index}
            />


          </View>
          <View style={styles.BaseMedium}>

            <FlatList
              horizontal
              data={this.state.especialidade}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item: rowData }) => {
                return (
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    style={styles.Card}
                    containerStyle={{ height: 20, width: 90 }}
                    imageStyle={{ height: 90, width: 90 }}

                  >
                    <Text style={{ textAlign: "center" }}>
                      {rowData.title}
                    </Text>
                  </Card>
                );
              }}
              keyExtractor={(item, index) => index}
            />


          </View>
          <View style={styles.BaseMedium}>

            <FlatList
              horizontal
              data={this.state.especialidade}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item: rowData }) => {
                return (
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    style={styles.Card}
                    containerStyle={{ height: 20, width: 90 }}
                    imageStyle={{ height: 90, width: 90 }}

                  >
                    <Text style={{ textAlign: "center" }}>
                      {rowData.title}
                    </Text>
                  </Card>
                );
              }}
              keyExtractor={(item, index) => index}
            />


          </View>

        </ScrollView>
        </View>


      </View >



    );
  }
}