import { TextInput, StyleSheet } from 'react-native';

export default function CampoCategoria({ value, onChangeText, placeholder }) {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#aaa"
        />
    );
}

const styles = StyleSheet.create({
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
}); 