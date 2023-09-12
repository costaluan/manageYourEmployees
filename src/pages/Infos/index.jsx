import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Infos = ({ route }) => {
    const data = route.params;
    console.log(data);
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={['#111017', '#090320']}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image source={{ uri: data.image }} style={styles.userImage} />
                    <Text style={styles.label}>Nome:</Text>
                    <Text style={styles.info}>{data.name}</Text>
                    <Text style={styles.label}>E-mail:</Text>
                    <Text style={styles.info}>{data.email}</Text>
                    <Text style={styles.label}>CPF:</Text>
                    <Text style={styles.info}>{data.cpf}</Text>
                    <Text style={styles.label}>Data de Nascimento:</Text>
                    <Text style={styles.info}>{data.birth_date}</Text>
                    <Text style={styles.label}>Administrador:</Text>
                    <Text style={styles.info}>{data.admin ? 'Sim' : 'Não'}</Text>
                    <Text style={styles.label}>Cidade:</Text>
                    <Text style={styles.info}>{data.city}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.goBack()}
                    >
                        <LinearGradient
                            colors={['#4A4A4A', '#179AC3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.buttonGradient}
                        >
                            <Text style={styles.buttonText}>Return</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    );
};

export default Infos;
