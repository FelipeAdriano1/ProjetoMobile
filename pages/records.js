import { View, Text, StyleSheet } from 'react-native'
import { ExpensesContext } from '../expensesContext'
import { useContext } from 'react'

export default function Records() {
    const { expenses } = useContext(ExpensesContext)
    return (
        <View style={styles.container}>
            {expenses.map((item) => (
                <View key={item.id} style={[styles.card, { borderLeftColor: item.tipo === 'Despesa' ? '#e74c3c' : '#26bfa6' }]}>
                    <View style={styles.cardContent}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.titulo}>{item.descricao}</Text>
                            <Text style={styles.subtitulo}>{item.categoria}</Text>
                        </View>
                        <Text style={[styles.valor, { color: item.tipo === 'Despesa' ? '#e74c3c' : '#26bfa6' }]}>R${item.valor}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingTop: 10,
        alignItems: 'center',
    },
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
        borderLeftWidth: 5
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
})