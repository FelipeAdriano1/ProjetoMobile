import { useState, useContext } from 'react';
import ContainerPadrao from '../components/ContainerPadrao';
import InputPadrao from '../components/InputPadrao';
import CampoCategoria from '../components/CampoCategoria';
import AlternadorTipo from '../components/AlternadorTipo';
import BotaoPrincipal from '../components/BotaoPrincipal';
import { ExpensesContext } from '../expensesContext';

export default function Expenses() {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tipo, setTipo] = useState('Despesa');
    const { addExpense } = useContext(ExpensesContext);

    function handleAdd() {
        addExpense({ descricao, valor: parseFloat(valor) || 0, categoria, tipo });
        setDescricao('');
        setValor('');
        setCategoria('');
    }

    return (
        <ContainerPadrao>
            <InputPadrao
                value={descricao}
                onChangeText={setDescricao}
                placeholder="Digite a descrição"
            />
            <InputPadrao
                value={valor}
                onChangeText={setValor}
                placeholder="Digite o valor"
                keyboardType="numeric"
            />
            <CampoCategoria
                value={categoria}
                onChangeText={setCategoria}
                placeholder="Selecione uma categoria"
            />
            <AlternadorTipo tipo={tipo} onPress={() => setTipo(tipo === 'Receita' ? 'Despesa' : 'Receita')} />
            <BotaoPrincipal onPress={handleAdd}>Adicionar Gasto</BotaoPrincipal>
        </ContainerPadrao>
    );
}