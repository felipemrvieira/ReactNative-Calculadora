import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default props => (
    <View style={style.topo}>
        <Text style={style.txtTitulo}>Topo</Text>
    </View>

)

const style = StyleSheet.create({
    topo:{
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center'
    },
    txtTitulo:{
        fontSize: 25,
        color: '#FFF'
    }
})