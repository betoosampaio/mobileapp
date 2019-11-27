import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from "react-native-elements";
import CardView from 'react-native-cardview'



const styles = StyleSheet.create({

    SegimentoHeader: {
        height: 90,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    Rodizio: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 70,
        marginLeft: 22,
        backgroundColor: '#d1cce6',
        borderRadius: 10,
    },
    textRodizio: {
        fontWeight: 'bold',
        color: '#333336'
    },
    AlaCarte: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 70,
        marginLeft: 10,
        backgroundColor: '#d1cce6',
        borderRadius: 10,
    },
    Balada: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 70,
        marginLeft: 10,
        backgroundColor: '#d1cce6',
        borderRadius: 10,
    },


});





export default class EspecialidadeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        return (


            <View style={styles.SegimentoHeader}>
                <View style={styles.Rodizio}>

                    <Text style={styles.textRodizio}>Rodizio</Text>

                </View>
                <View style={styles.AlaCarte}>

                    <Text style={styles.textRodizio}>A la Carte</Text>

                </View>
                <View style={styles.Balada}>

                    <Text style={styles.textRodizio}>Balada</Text>

                </View>
            </View>


        );
    }
}