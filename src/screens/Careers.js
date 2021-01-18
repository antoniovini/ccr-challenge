import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Button, Title } from 'react-native-paper';

import { useHistory } from 'react-router-native';

export default function Careers() {
  const [careers, setCareers] = useState([
    { id: 0, text: "Arquitetura"},
    { id: 1, text: "Design de interiores"},
    { id: 2, text: "Design Gráfico"},
    { id: 3, text: "Artes Visuais"},
    { id: 4, text: "Design de Games"},
    { id: 5, text: "Artes Plásticas"},
    { id: 5, text: "Engenharia"},
    { id: 5, text: "Cirurgia"},
  ]);

  const history = useHistory();

  const createRows = (data, columns) => {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;

    while(lastRowElements !== columns){
      data.push({
        id: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }

    return data;
  }

  return (
    <View
      style={styles.container}
    >
      <FlatList
        style={styles.mainContainer}
        data={createRows(careers, 2)}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => {
          
          return (
            <View
              style={[
                styles.box,
                { backgroundColor: item.empty ? 'transparent' : '#B2FFFA'}
              ]}
            >
              <Title>{item.text}</Title>
            </View>
          );
        }}
      >

      </FlatList>
      <Button
        onPress={() => history.push('/premium')}
        contentStyle={styles.button}
        style={styles.darkButton}
        mode="contained"
      >
        Continuar
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
  },
  box: {
    backgroundColor: '#B2FFFA',
    flex: 1,
    height: Dimensions.get('screen').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
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