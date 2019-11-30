import React, { Component } from "react";
import { Text, View, StyleSheet, } from 'react-native'


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
        backgroundColor: '#5e49a6',
        borderRadius: 10,
    },
    textRodizio: {
        fontWeight: 'bold',
        color: '#fff'
    },
    AlaCarte: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 70,
        marginLeft: 10,
        backgroundColor: '#5e49a6',
        borderRadius: 10,
    },
    Balada: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 70,
        marginLeft: 10,
        backgroundColor: '#5e49a6',
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