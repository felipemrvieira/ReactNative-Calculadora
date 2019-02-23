import React, {Component} from 'react';
import { Picker, StyleSheet} from 'react-native';

export default class Operacao extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <Picker 
            style={ style.picker }
            selectedValue={this.props.operacao}
            onValueChange={ op => (this.props.atualizaOperacao( op )) }>
                <Picker.Item label='Soma' value='soma' />
                <Picker.Item label='Subtracao' value='subtracao' />
            </Picker>
        )
    }

}


const style = StyleSheet.create({
    picker:{
        marginTop: 15,
        marginBottom: 15    
    }
})