import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = () => {
  return (
    <LinearGradient
      colors={['#111017', '#090320']} // Array de cores para o gradiente
      style={{ flex: 1 }} // Estilo para o componente com gradiente
    >
      
    </LinearGradient>
  );
};

export default GradientBackground;
