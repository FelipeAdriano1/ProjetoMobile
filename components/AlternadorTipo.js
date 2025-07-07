import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AlternadorTipo({ tipo, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.tipoBtn, tipo === 'Despesa' ? styles.tipoDespesa : styles.tipoReceita]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={styles.tipoBtnText}>{tipo}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tipoBtn: {
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        marginBottom: 30,
        marginTop: 10,
    },
    tipoDespesa: {
        backgroundColor: '#ff6b6b',
    },
    tipoReceita: {
        backgroundColor: '#26bfa6',
    },
    tipoBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
}); 