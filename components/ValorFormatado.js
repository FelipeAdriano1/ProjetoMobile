import { Text, StyleSheet } from 'react-native';

export default function ValorFormatado({ valor, tipo }) {
    const cor = tipo === 'Despesa' ? '#e74c3c' : '#26bfa6';
    const prefixo = tipo === 'Despesa' ? '-R$' : 'R$';
    const valorFormatado = `${prefixo} ${Math.abs(Number(valor)).toFixed(2)}`;
    return <Text style={[styles.valor, { color: cor }]}>{valorFormatado}</Text>;
}

const styles = StyleSheet.create({
    valor: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
}); 