import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';





export default class Home extends Component {


    render() {
        return (

            <View>

                <View style={styles.ContainerMenu} >
                    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
                    <Text style={styles.TextoHeader}>Bem vindo a FreedAPP</Text>
                    <Icon name="qrcode" size={33} style={styles.qrCode} />
                </View>




            </View>

        );
    }
}