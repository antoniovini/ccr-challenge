import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button, Paragraph, Title, useTheme } from 'react-native-paper';

export default function Premium() {
  const { colors, text } = useTheme();

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.mainContainer}
      >
        <Title
          style={{color: text.dark, marginBottom: 20}}
        >
          Vamos seguir por esta <Text style={{fontWeight: 'bold'}}>Trilha</Text> rumo à carreira dos seus sonhos?
        </Title>
        <Paragraph
          style={{marginBottom: 20}}
        >
          Agora que te conhecemos um pouco melhor, vamos sugerir os melhores
          conteúdos para te orientar no seu desenvolvimento profissional.
        </Paragraph>

        <Paragraph
          style={{ marginBottom: 20}}
        >
          No <Text style={{fontWeight: 'bold'}}>Plano Gratuito</Text>, acesse a plataforma pelo menos 1x ao dia para liberar 3 videos
          com doses de conhecimento essencial para o mercado de trabalho.
        </Paragraph>
        <Title
          style={{color: text.dark, marginBottom: 40}}
        >
          Já assinantes do <Text style={{fontWeight: 'bold'}}>Plano Premium</Text> têm em mãos todo o conteúdo da <Text style={{fontWeight: 'bold'}}>Trilha</Text>
          , sem limite de acesso, com planos a partir de <Text style={{fontWeight: 'bold'}}>R$ 15,00 / mês </Text>.
        </Title>

        <Paragraph
          style={{ color: "#666666" }}
        >
          Se você esta cadastrado no <Text style={{fontWeight: 'bold'}}>CadÚnico</Text>, oferecemos o Plano Premium de graça para você.
        </Paragraph>
        <Button
          onPress={() => {}}
          style={styles.moreButton}
          color="black"
        >
          Saiba Mais
        </Button>
      </View>
      <Button
        onPress={() => {}}
        contentStyle={[styles.button]}
        style={styles.lightButton}
        mode="contained"
      >
        Continuar com plano gratuito
      </Button>
      <Button
        onPress={() => {}}
        contentStyle={styles.button}
        style={styles.darkButton}
        mode="contained"
      >
        Quero ser Premium
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
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
  },
  moreButton: {
    color: "black", 
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})
