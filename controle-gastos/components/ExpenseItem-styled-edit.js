//Iporta React e o hook useState para controle de estado
import React, { useState } from 'react';

//Importa os componentes nantivos para  construção de interface
import {
    View,                //Container do layout
    TextInput,          //Campo de entrada de texto
    Text,              //Exibição de texto
    TouchableOpacity, //Botão personalizavel
    FlatList,        //Lista de rolagem eficientw  
    StyleSheet,     //Estilização 
    Alert          //Exibição de alertas 
} from 'react-native';

//Componente principal
export default function HomeScreen() {
    //Estado para os campode do formularios
    const [descricao, setDescricao] = useState(''); //Descriçao do gasto
    const [valor, setValor] = useState('');  //valor do gasto
    const [gastos, setGastos] = useState([]); //Lista de gastos
    const [editandoId, setEditandoId] = useState(null); //id do item sendo editado

    //Função para adicionar um novo gasto ou atualizar um exsitente
    const adicionarOuAtualizarGasto = () => {
        //validação campos não podem estar vazios
        if (!descricao || !valor) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
    }

    //Validação para verificar valor numerico no campo valor
        if (isNaN(valor)) {
            Alert.alert('Erro', 'Por favor, insira um valor numérico válido.');
            return;
        }

        if (editandoId) {
            const gastoAtualizado = gastos.map(item =>
            //Atualiza o gasto existente com base no id
            item.id === editandoId ? { ...item, descricao, valor: parseFloat(valor).toFixed(2) } : item); //Atualiza valores
        }
}