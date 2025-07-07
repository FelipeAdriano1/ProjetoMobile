import { Text, StyleSheet } from 'react-native';

export default function LabelPadrao({ children }) {
    return <Text style={styles.label}>{children}</Text>;
}

const styles = StyleSheet.create({
    label: {
        alignSelf: 'flex-start',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 6,
        marginLeft: 2,
    },
}); 