import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotaoPrincipal({ onPress, children, corFundo = '#2196f3' }) {
    return (
        <TouchableOpacity style={[styles.btn, { backgroundColor: corFundo }]} onPress={onPress} activeOpacity={0.8}>
            <Text style={styles.btnText}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        marginTop: 10,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
}); 