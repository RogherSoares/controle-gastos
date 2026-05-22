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

        //Validação para verificar valor numerico no campo valor
        if (isNaN(valor)) {
            Alert.alert('Erro', 'Por favor, insira um valor numérico válido.');
            return;
        }

        if (editandoId) {
            const gastoAtualizado = gastos.map(item =>
            //Atualiza o gasto existente com base no id
            item.id === editandoId ? { ...item, descricao, valor: parseFloat(valor).toFixed(2) } : item); //Atualiza valores
            setGastos(gastoAtualizado); //Atualiza o estado
            setEditandoId(null); //Limpa o estado de edição
        } else {
            //Criação de um novo gasto
            const novoGasto = {
                id: Date.now().toString(), //Gera um id único
                descricao,  //Descrição informada
                valor: parseFloat(valor).toFixed(2) //Valor formatado
            };
            setGastos([...gastos, novoGasto]); //Adiciona o novo gasto à lista
        }
        //Limpa os campos do formulário
        setDescricao('');
        setValor(''); 
    };

    //Funçaõ para remover o gasto da lista
    const removerGasto = (id) => {
        setGastos(gastos.filter(item => item.id !== id)); //Remove o gasto com base no id

        //Verifica se o item a ser removido está sendo editado. Se tiver, cancela a opereção
        if (editandoId === id) {
            setEditandoId(null); //sai do modo de edição
            setDescricao(''); //Limpa o campo descrição
            setValor(''); //Limpa o campo valor
        }    
    }; 
    
    //Função para preencher os campos do formulário com os dados do item a ser editado
    const editarGasto = (item) => {
        setDescricao(item.descricao); //Preenche  descrição
        setValor(item.valor);         //Preenche  valor
        setEditandoId(item.id);       //Armazena o ID
    };

    //Calculo do valor de gastos
    const totalGasto = gastos.reduce((acc, item) => acc + parseFloat(item.valor), 0).toFixed(2); //Soma os valores dos gastos e formata para 2 casas decimais

    //Retorna os elementos vizuais da interface
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Controle de Gastos</Text>

            {/* Campo para entrada da descrição */}
            <TextInput 
                style={styles.input}
                placeholder="Descrição do gasto"
                value={descricao}
                onChangeText={setDescricao}
            />
            {/* Campo para entrada do valor */}
            <TextInput 
                style={styles.input}
                keyboardType="numeric"
                placeholder="Valor do gasto"
                value={valor}
                onChangeText={setValor}
            />

            {/* Botão para adicionar o valor a lista */}
            <TouchableOpacity style={styles.button} onPress={adicionarOuAtualizarGasto}>
                <Text style={styles.buttonText}>
                    {editandoId ? 'Atualizar Gasto' : 'Adicionar Gasto'}
                </Text>
            </TouchableOpacity>

            {/* Lista de gastos exibidos na FlatList */}
            <FlatList
                data={gastos} //Fonte de dados
                keyExtractor={item => item.id} //Identificador único
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        {/* Exibe a descrição e valor */}
                        <Text style={styles.item}>
                            {item.descricao} - R$ {item.valor}
                        </Text>
                        {/* Ações de edição e remoção */}
                        <View style={styles.actions}>
                            {/* Botão para editar o gasto */}
                            <TouchableOpacity onPress={() => editarGasto(item)} style={styles.editButton}>
                                <Text style={styles.actionText}>
                                    Editar
                                </Text>
                            </TouchableOpacity>
                            {/* Botão para remover o gasto */}
                            <TouchableOpacity onPress={() => removerGasto(item.id)} style={styles.deletButton}>
                                <Text style={styles.actionText}>
                                    Excluir
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            />

            {/* Exibe o total gasto atualizado */}                                
            <Text style={styles.total}>
                Total Gasto: R$ {totalGasto}
            </Text>

        </View>
    );
}

// Estilos aplicados à interface
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
paddingTop: 60,
backgroundColor: '#f5f5f5',
},
title: {
fontSize: 22,
fontWeight: 'bold',
marginBottom: 20,
textAlign: 'center',
},
input: {
backgroundColor: '#fff',
padding: 12,
borderRadius: 8,
marginBottom: 10,
borderWidth: 1,
borderColor: '#ccc',
},
button: {
backgroundColor: '#3b82f6',
padding: 12,
borderRadius: 8,
alignItems: 'center',
marginBottom: 20,
},
buttonText: {
color: '#fff',
fontWeight: 'bold',
},
itemContainer: {
backgroundColor: '#e0e7ff',
borderRadius: 8,
padding: 10,
marginBottom: 10,
},
item: {
fontSize: 16,
marginBottom: 5,
},
actions: {
flexDirection: 'row',
justifyContent: 'flex-end',
gap: 10, // Espaço entre os botões (em versões recentes do React Native)
},
editButton: {
marginRight: 10,
},
deleteButton: {},
actionText: {
color: '#2563eb',
fontWeight: 'bold',
},
total: {
marginTop: 20,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
});