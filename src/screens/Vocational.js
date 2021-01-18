import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

import { useHistory } from 'react-router-native';

export default function Vocational() {
  const [questions, setQuestions] = useState([
    { title: "Costumo ver imagens claras quando fecho meus olhos" },
  ]);
  const [curr, setCurr] = useState(1);
  const [option, setOption] = useState(null);

  const { colors, text } = useTheme();

  const history = useHistory();

  const onPress = () => {
    setOption(null);

    if(questions.length > curr){
      setCurr(curr + 1);
    }else{
      history.push('/result');
    }
  }

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
        <Text style={[{ color: text.dark }, styles.count]}>
          <Text
            style={[{ color: text.dark }, styles.selectedCount]}
          >{curr}</Text> / { questions.length }
        </Text>
        <Text
          style={[
            { color: text.dark },
            styles.title
          ]}
        >
          {questions.length >= curr ? questions[curr-1].title : ""}:
        </Text>
        <View
          style={styles.optionsContainer}
        >
          <TouchableHighlight
            onPress={() => setOption(1)}
            style={[
              styles.optionButton,
              { backgroundColor: option === 1 ? colors.accent : "transparent" }
            ]}
            underlayColor={"#dddddd"}
            activeOpacity={0.6}
          >
            <Text>Discordo totalmente</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => setOption(2)}
            style={[
              styles.optionButton,
              { backgroundColor: option === 2 ? colors.accent : "transparent" }
            ]}
            underlayColor={"#dddddd"}
            activeOpacity={0.6}
          >
            <Text>Discordo parcialmente</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => setOption(3)}
            style={[
              styles.optionButton,
              { backgroundColor: option === 3 ? colors.accent : "transparent" }
            ]}
            underlayColor={"#dddddd"}
            activeOpacity={0.6}
          >
            <Text>Concordo parcialmente</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => setOption(4)}
            style={[
              styles.optionButton,
              { backgroundColor: option === 4 ? colors.accent : "transparent" }
            ]}
            underlayColor={"#dddddd"}
            activeOpacity={0.6}
          >
            <Text>Concordo totalmente</Text>
          </TouchableHighlight>
        </View>
      </View>
      <Button
        onPress={() => {}}
        contentStyle={[styles.button]}
        style={styles.lightButton}
        mode="contained"
      >
        Precisa de ajuda?
      </Button>
      <Button
        onPress={onPress}
        contentStyle={styles.button}
        style={styles.darkButton}
        mode="contained"
      >
        { questions.length === curr ? "Finalizar" : "Próximo"}
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
    marginVertical: 20,
    marginHorizontal: 20
  },
  count: {
    fontSize: 22,
  },
  selectedCount: {
    fontSize: 42,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  optionsContainer: {
    marginVertical: 40,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginVertical: 4,
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