import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Button, Paragraph, useTheme } from 'react-native-paper';

export default function Result() {
  const { text } = useTheme();

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.mainContainer}
      >
        <Paragraph>
          Resultado
        </Paragraph>
        <Text
          style={[
            { color: text.dark },
            styles.title,
          ]}
        >
          Inteligência Visual-Espacial
        </Text>
        <Paragraph>
          Pessoas com este tipo de inteligência pensam o mundo a três dimensões.
          Para além da enorme facilidade para criar, imaginar e desenhar imagens 2D e 3D,
          as pessoas com este tipo de inteligência têm um enorme talento para a arte gráfica
          e projetual. Como qualidade principal estão: a criatividade, a sensibilidade, e a 
          imaginação acima da média.
        </Paragraph>
        <Text
           style={[
            { color: text.dark, marginVertical: 40 },
            styles.title,
          ]}
        >
          A seguir, vamos descobrir quais profissões mais combinam com seu tipo de inteligência. :)
        </Text>
      </View>
      <Button
        onPress={() => {}}
        contentStyle={styles.button}
        style={styles.darkButton}
        mode="contained"
      >
        Me mostre
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
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
})
