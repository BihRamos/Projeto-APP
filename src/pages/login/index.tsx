import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from "./style";
import Logo from '../../assets/logo.png';
import { themas } from "../../global/themes";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios');
            }

            setLoading(true); // Indica que a requisição está em andamento

            const emailValido = "teste@email.com";
            const senhaValida = "123456";

            setTimeout(() => {
                if (email === emailValido && password === senhaValida) {
                    Alert.alert('Logado com sucesso');
                } else {
                    Alert.alert('Acesso negado', 'E-mail ou senha incorretos');
                }
                setLoading(false);
            }, 2000);

        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Ocorreu um problema ao tentar fazer login');
        } 
    }

    return (
        <LinearGradient colors={["#045DE9", "#67C6E3"]} style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Bem-Vindo!</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons name="email" size={25} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={showPassword} // Para esconder a senha
                    />
                    <MaterialIcons name="remove-red-eye" size={25} color={themas.colors.gray}
                        onPress={() => setShowPassword(!showPassword)} // Alterna a visibilidade da senha
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>

                    {loading ? <ActivityIndicator color={'#FFFF'} size={'small'} /> : <Text style={style.textButton}>Entrar</Text>
                    }


                </TouchableOpacity>
            </View>

            <Text style={style.textBottom}>
                Não tem conta? <Text style={style.textBottomCreate}>Crie agora</Text>
            </Text>
        </LinearGradient>
    );
}
