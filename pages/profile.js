import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Profile() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarCircle} />
            </View>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o seu nome"
                placeholderTextColor="#aaa"
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o seu e-mail"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.btnSalvar}>
                <Text style={styles.btnSalvarText}>Salvar Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
        alignItems: 'center',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    avatarCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 3,
        borderColor: '#2196f3',
        backgroundColor: 'transparent',
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 6,
        marginLeft: 2,
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eee',
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
        marginBottom: 18,
        height: 48,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.07,
        shadowRadius: 2,
        elevation: 1,
    },
    btnSalvar: {
        width: '100%',
        backgroundColor: '#2196f3',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        marginTop: 10,
    },
    btnSalvarText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
});