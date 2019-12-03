import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, } from 'react-native'
import { Card } from "react-native-elements";


const Especialidade = [
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
    BaseMedium: {
        height: 200,
        backgroundColor: '#fff',
    },
    hr2: {
        marginLeft: 16,
        marginTop: 10,
        opacity: 0.2,
    },
    textoDestaque: {
        color: '#000',
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#fff',
    },
});


export default class EspecialidadeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Especialidade: Especialidade,
        };
    }

    render() {
        return (

            <View style={styles.BaseMedium}>

                <Text style={styles.textoDestaque}>Especialidades</Text>

                <FlatList
                    horizontal
                    data={this.state.Especialidade}
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


        );
    }
}