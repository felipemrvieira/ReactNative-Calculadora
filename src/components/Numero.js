import React, {Component} from 'react';
import { TextInput, View, StyleSheet} from 'react-native';

export default props => (
  <TextInput 
    style={ style.numero } 
    value={props.num}
    onChangeText={ valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)} />
)


const style = StyleSheet.create({
    numero:{
        width: 140,
        height: 80,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#f6f6f6'
    }
})