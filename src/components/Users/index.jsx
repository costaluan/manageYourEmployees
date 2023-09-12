import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const Users = ({ data }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.userImage} />
            <Text style={styles.userName}>{data.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Infos", data)}>
                <LinearGradient
                    colors={['#4A4A4A', '#179AC3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonGradient}
                >
                    <Text style={styles.buttonText}>Details</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};



export default Users;
