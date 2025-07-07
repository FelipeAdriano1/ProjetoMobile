import { View, StyleSheet } from 'react-native';

export default function ContainerPadrao({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
        alignItems: 'center',
    },
}); 