import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';

// Lista de produtos //
const produtosMock = [
  { id: '1', nome: 'Arroz', preco: 'R$ 5,99', mercado: 'Mercado A', categoria: 'Alimentos' },
  { id: '2', nome: 'Feijão', preco: 'R$ 7,49', mercado: 'Mercado B', categoria: 'Alimentos' },
  { id: '3', nome: 'Refrigerante', preco: 'R$ 3,29', mercado: 'Mercado C', categoria: 'Bebidas' },
  { id: '4', nome: 'Detergente', preco: 'R$ 2,99', mercado: 'Mercado A', categoria: 'Limpeza' },
];

export default function Layout() {
  //armazenar texto do campo de busca
  const [filtro, setFiltro] = useState('');

  const [categoriaSelecionada, setCategoriaSelecionada]=useState('');// armazenar a categoria selecionada

// Filtrando os produtos conforme busca e categoria
  const produtosFiltrados = produtosMock.filter((item) =>
    item.nome.toLowerCase().includes(filtro.toLowerCase()) && //buscar nome
    (categoriaSelecionada ==='' || item.categoria === categoriaSelecionada) 
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Comparar Preços</Text>
      {/* campo de busca */}
      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        value={filtro}
        onChangeText={setFiltro}
      />

     {/* filtros por categoria */}
     <View style={styles.categoriasContainer}>
  {['Tudo', 'Alimentos', 'Bebidas', 'Limpeza'].map((cat) => (
    <TouchableOpacity
      key={cat}
      style={[
        styles.botaoCategoria,
        categoriaSelecionada === cat || (cat === 'Tudo' && categoriaSelecionada === '') ? styles.botaoCategoriaAtivo : null
      ]}
      onPress={() => setCategoriaSelecionada(cat === 'Tudo' ? '' : cat)}
    >
      <Text style={[
        styles.textoBotaoCategoria,
        categoriaSelecionada === cat || (cat === 'Tudo' && categoriaSelecionada === '') ? styles.textoCategoriaAtivo : null
      ]}>
        {cat}
      </Text>
    </TouchableOpacity>
  ))}
</View>

     
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <Text style={styles.mercado}>{item.mercado}</Text>
          </View>
        )}
      />
    </View>
  );
}
