import { View, Text, StyleSheet } from 'react-native';

export default function CardHistorico({ descricao, categoria, valor, tipo }) {
    return (
        <View style={[styles.card, { borderLeftColor: tipo === 'Despesa' ? '#e74c3c' : '#26bfa6' }]}> 
            <View style={styles.cardContent}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.titulo}>{descricao}</Text>
                    <Text style={styles.subtitulo}>{categoria}</Text>
                </View>
                <Text style={[styles.valor, { color: tipo === 'Despesa' ? '#e74c3c' : '#26bfa6' }]}>{valor}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 3,
        borderLeftWidth: 5,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    titulo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 2,
    },
    subtitulo: {
        fontSize: 14,
        color: '#888',
    },
    valor: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
}); 