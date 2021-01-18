import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button,
  useTheme,
} from 'react-native-paper';

import { useHistory } from 'react-router-native';

export default function Welcome() {
  const { colors } = useTheme();
  const history = useHistory();

  return (
    <View
      style={[
        { backgroundColor: colors.background },
        styles.container,
      ]}
    >
      <View
        style={styles.mainContainer}
      >
        <Text
          style={[
            { color: "#009EB3" },
            styles.title
          ]}
        >
          Seja bem-vindo(a)!
        </Text>
        <Text
          style={[
            { color: "#009EB3" }, 
            styles.paragraph
          ]}
        >
          É muito bom te ter por aqui. Acreditamos que esse será o
          início de uma incrível jornada e uma carreira brilhante.
        </Text>
        <Text
          style={styles.subheading}
        >
          Que tal começar uma <Text style={styles.span}>Jornada de Descoberta Vocacional</Text> que 
          vai mostrar no que você é fera?
        </Text>
      </View>
      <Button
        onPress={() => {}}
        contentStyle={[styles.button]}
        style={styles.lightButton}
        mode="contained"
      >
        Deixar para depois
      </Button>
      <Button
        onPress={() => history.push('/vocational')}
        contentStyle={[styles.button]}
        style={styles.darkButton}
        mode="contained"
      >
        Quero embarcar!
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 42,
    fontWeight: "bold"
  },
  paragraph: {
    marginVertical: 16,
    fontSize: 18
  },
  subheading: {
    fontSize: 22,
  },
  span: {
    fontWeight: 'bold',
    color: "#009EB3"
  },
  button: {
    paddingVertical: 8,
    borderRadius: 0,
  },
  darkButton: {
    borderRadius: 0, 
    backgroundColor: '#00DAE8',
    color: "black",
  },
  lightButton: {
    borderRadius: 0,
    elevation: 0,
  }
})