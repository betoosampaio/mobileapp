import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default class App extends Component {
    state = {
        data: [
            {
                id: 0,
                imageUrl: "https://www.viagemegastronomia.com.br/wp-content/uploads/2018/07/dia-da-pizza-home-destaque.jpg",
                full_name: 'Repo 1'
            },

        ],
    };

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image source={item.imageUrl }></Image>
            <Text>{item.full_name}</Text>
        </View>
    );

    render() {
        return (
            <FlatList
                style={{ marginTop: 30 }}
                contentContainerStyle={styles.list}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
            />
        );
    }
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 20,

    },

    listItem: {
        backgroundColor: '#EEE',
        marginTop: 20,
        padding: 30,
    },
});