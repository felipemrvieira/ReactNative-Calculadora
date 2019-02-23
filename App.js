import React, {Component} from 'react';
import { Text, View} from 'react-native';
import Resultado from './src/components/Resultado';
import Painel from './src/components/Painel';
import Topo from './src/components/Topo';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      resultado: '0',
      num1: '', 
      num2: '',
      operacao: 'subtracao'
    }

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
}

calcular(){
    let resultado = '';
    
    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case 'subtracao':
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
        
      default:
        resultado = 0;
        break;
    }
    this.setState({resultado: resultado.toString()});
}

atualizaValor(nomeCampo, valor){
  const obj = {};
  obj[nomeCampo] = valor;
  this.setState( obj );
}

atualizaOperacao(op){
  this.setState( {operacao: op} );
}

  render(){
    return(
    <View >
      <Topo />
      <Resultado resultado={this.state.resultado} />
      <Painel 
        num1={this.state.num1}
        num2={this.state.num2}
        operacao={this.state.operacao}
        calcular={this.calcular}
        atualizaValor={this.atualizaValor}
        atualizaOperacao={this.atualizaOperacao}
         />
    </View>

    );
  }
}

