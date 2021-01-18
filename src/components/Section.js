import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useTheme } from 'react-native-paper';
import Card from './Card';

export default function Section({title="", items=[]}) {

  const {text} = useTheme();

  return (
    <View
      style={styles.container}
    >
      <Text
        style={[
          { color: text.dark },
          styles.title
        ]}
      >{title}</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card data={item} />
        )}
        horizontal
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})