/*import React from 'react';
import { View, Text, ImageBackground,StyleSheet,TouchableOpacity   } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { AgradecimentoProps } from '../../navigation/types';

export default function Agradecimento({ navigation, route }: AgradecimentoProps)  {
    const handleContinuar = () => {
      navigation.navigate('List');
    };
  
    return (
      <ImageBackground
        source={require('../../assets/equipe.png')}
        style={styles.ImageBackground}
        resizeMode="contain"
      >
        <View style={styles.overlay}>
          <View style={styles.card}>
            <Text style={styles.title}>🎉 Obrigado por entrar!</Text>
            <Text style={styles.text}>
              Ao continuar, você declara que leu e concorda com nossos{' '}
              <Text style={styles.link}>Termos de Uso</Text> e{' '}
              <Text style={styles.link}>Política de Privacidade</Text>.
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleContinuar}>
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
  */