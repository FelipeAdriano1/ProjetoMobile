import { View, StyleSheet } from 'react-native';

export default function AvatarPerfil() {
    return <View style={styles.avatarCircle} />;
}

const styles = StyleSheet.create({
    avatarCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 3,
        borderColor: '#2196f3',
        backgroundColor: 'transparent',
    },
}); 