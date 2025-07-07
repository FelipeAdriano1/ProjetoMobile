import { useContext } from 'react';
import { ExpensesContext } from '../expensesContext';
import ContainerPadrao from '../components/ContainerPadrao';
import CardResumo from '../components/CardResumo';

export default function Resume() {
    const { expenses } = useContext(ExpensesContext);

    // Cálculo das somas
    const receita = expenses
        .filter(item => item.tipo === 'Receita')
        .reduce((acc, item) => acc + Number(item.valor), 0);

    const despesas = expenses
        .filter(item => item.tipo === 'Despesa')
        .reduce((acc, item) => acc + Number(item.valor), 0);

    const saldo = receita - despesas;

    return (
        <ContainerPadrao>
            <CardResumo
                titulo="Receitas"
                valor={`R$ ${receita.toFixed(2)}`}
                corBorda="#26bfa6"
                corValor="#26bfa6"
            />
            <CardResumo
                titulo="Despesas"
                valor={`R$ ${despesas.toFixed(2)}`}
                corBorda="#e74c3c"
                corValor="#e74c3c"
            />
            <CardResumo
                titulo="Saldo"
                valor={`R$ ${saldo.toFixed(2)}`}
                corBorda="#26bfa6"
                corValor="#26bfa6"
            />
        </ContainerPadrao>
    );
}