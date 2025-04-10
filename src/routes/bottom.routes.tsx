import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationStackProps } from '../navigation/types'; // ou o caminho do seu types




export default function Agradecimento() {
  const navigation = useNavigation<NavigationStackProps>();

  const handleContinuar = () => {
    navigation.navigate('Layout');
  };

  return (
    <ImageBackground
      source={require('../assets/equipe.png')}
      style={styles.imageBackground}
      resizeMode="repeat"
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>🎉 Seja Bem Vindo </Text>
          <Text style={styles.text}>
        Somos uma equipe do 3º módulo do curso Técnico em Desenvolvimento de Sistemas.{"\n\n"}
          Este aplicativo faz parte do nosso Projeto Integrador, orientado pelo professor Alex
          {' '}
            <Text style={styles.link}> </Text>{' '}
            <Text style={styles.link}></Text>
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleContinuar}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(233, 216, 216, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#045DE9',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#045DE9',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#67C6E3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
