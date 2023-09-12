import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import Users from '../../components/Users';


const Home = () => {
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('users');
            // console.log(response.data);
            setUsers(response.data);
            setLoading(false);
        }
        loadUsers();
    }, []);
    if (loading) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <ActivityIndicator color="#121212" size={45} />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Your Employees</Text>
                </View>
                <FlatList
                    data={users}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <Users data={item} />}

                />
                
            </View>
        );
    }
}

export default Home;