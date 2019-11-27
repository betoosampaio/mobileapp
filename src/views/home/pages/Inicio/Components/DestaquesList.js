import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from "react-native-elements";
import CardView from 'react-native-cardview'


const DestaquesFreed = [
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

const styles = StyleSheet.create({
    DestaquesView: {
        backgroundColor: '#fff',
        height:170,
    },
    textoDestaque: {
        color: '#000',
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#fff',
    },
});





export default class DestaquesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DestaquesFreed: DestaquesFreed,
        };
    }

    render() {
        return (

            <View style={styles.DestaquesView} >

                <Text style={styles.textoDestaque}>Destaques</Text>

                <FlatList
                    horizontal
                    data={this.state.DestaquesFreed}
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

        );
    }
}