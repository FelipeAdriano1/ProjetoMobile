import { View, Text, StyleSheet } from 'react-native';

export default function CardResumo({ titulo, valor, corBorda, corValor }) {
    return (
        <View style={[styles.card, { borderColor: corBorda }]}> 
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={[styles.valor, { color: corValor }]}>{valor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        marginBottom: 20,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 3,
    },
    titulo: {
        fontSize: 18,
        color: '#444',
        fontWeight: '400',
        marginBottom: 8,
    },
    valor: {
        fontSize: 28,
        fontWeight: 'bold',
    },
}); 