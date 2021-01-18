import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper';
import Section from '../components/Section';

export default function Courses() {
  const { colors } = useTheme();

  return (
    <>
      <Appbar.Header
        style={{backgroundColor: colors.accent}}
      >
        <Appbar.Content title="Cursos" />
        <Appbar.Action icon="filter" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView
        style={styles.container}
      >
        <Section 
          title="Prepare-se para o mercado"
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
