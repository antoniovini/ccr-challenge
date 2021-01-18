import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BottomNavigation, useTheme } from 'react-native-paper';
import Courses from '../routes/Courses';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'courses', title: 'Cursos', icon: 'play-circle'},
    { key: 'help', title: 'Mentoria', icon: 'lightbulb-on'},
    { key: 'profile', title: 'Perfil', icon:"account-circle" },
  ])

  const { colors } = useTheme();

  const renderScene = BottomNavigation.SceneMap({
    profile: Courses,
    courses: Courses,
    help: () => <View />,
  })

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor: colors.accent}}
    />
  )
}

const styles = StyleSheet.create({
  
})
