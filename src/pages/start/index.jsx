import React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import styles from './styles';
import StartImg from '../../img/startimage.png'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const Start = () => {
    const navigation = useNavigation();

   
    return (
        <LinearGradient
            colors={['#111017', '#090320']}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
               
                <View>
                    <Image source={StartImg} style={styles.img} />
                </View>
                <View>
                    <Text style={styles.title}>Manage Your Employees. All in One Place</Text>
                    <Text style={styles.text}>Eliminate physical cards, get virtual data in your hand.</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <LinearGradient
                            colors={['#4A4A4A', '#179AC3']}
                            start={{ x: 0, y: 0 }} 
                            end={{ x: 1, y: 0 }}  
                            style={styles.buttonGradient} 
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

export default Start;
