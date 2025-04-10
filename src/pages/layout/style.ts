import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilo do container principal da tela
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 50,
  },

  // Título da tela
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  // Campo de input para buscar produtos
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },

  // Container dos botões de categoria
  categoriasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    flexWrap: 'wrap', // permite quebrar para próxima linha se não couber
  },

  // Botão de categoria padrão
  botaoCategoria: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4,
  },

  // Botão de categoria selecionado
  botaoCategoriaAtivo: {
    backgroundColor: '#1E90FF',
  },

  // Texto dentro do botão de categoria
  textoBotaoCategoria: {
    color: '#333',
    fontSize: 14,
  },

  // Texto do botão de categoria selecionado
  textoCategoriaAtivo: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Card de exibição de produto
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },

  // Nome do produto
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Preço do produto
  preco: {
    fontSize: 16,
    color: '#4682B4',
  },

  // Nome do mercado
  mercado: {
    fontSize: 14,
    color: '#777',
  },
});

export default styles;
