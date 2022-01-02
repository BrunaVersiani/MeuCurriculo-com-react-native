import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import foto from './assets/perfil.jpg';
import Card from './components/card/Index';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'GitHub':
        Alert.alert('Meu perfil:', 'https://github.com/BrunaVersiani');
        break;
      case 'Linkedin':
        Alert.alert(
          'Meu perfil:',
          'https://www.linkedin.com/in/bruna-versiani-54147a181/'
        );
        break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}> Bruna Versiani</Text>
          <Text style={style.funcao}> Desenvolverdor Mobile</Text>

          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('GitHub')}>
              <Text style={style.rs}> GitHub </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('Linkedin')}>
              <Text style={style.rs}> Linkedin </Text>
            </TouchableOpacity>
          </View>

          <Card titulo="Experiência Profissional">
            <Text style={style.card_content_text}>
              Gerente de Pesquisa e Desenvolvimento /PRODABEL - De 04/2019 a
              10/2021
            </Text>
          </Card>
          <Card titulo="Formação Academica">
            <Text style={style.card_content_text}>
              Sistemas de Informação /FUMEC - Em curso{' '}
            </Text>
            <Text style={style.card_content_text}>
              {' '}
              Curso Programação de Sistemas /PRONATEC
            </Text>
            <Text style={style.card_content_text}>
              Curso Programação Web /Recode
            </Text>
          </Card>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: `#ffe4e1`,
    flex: 1,
    alignItems: 'center',
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 4,
    borderColor: `#ffb6c1`,
  },
  nome: {
    color: `#dc143c`,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: `#dc143c`,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    marginTop: 10,
  },
  rs: {
    color: `#ff1493`,
    fontWeight: 'bold',
  },
  card_content_text: {
    marginBottom: 5,
  },
});

export default App;
