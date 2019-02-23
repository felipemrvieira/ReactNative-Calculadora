import React, {Component} from 'react';
import { TextInput, View, StyleSheet} from 'react-native';

export default  class Visor extends Component{
    

    render() {
        return( 
        <View >
            <TextInput style={style.entrada}
            placeholder='Digite algo'
            value={ this.props.resultado }
            />
        </View>
        );
    }

};

const style = StyleSheet.create({
    
    entrada:{
        fontSize: 30,
        height: 100
    }
})