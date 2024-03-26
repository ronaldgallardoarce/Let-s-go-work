import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const datos = [
    { id: 1, title: 'Profesional', image: require('./assets/splash.png') },
    { id: 2, title: 'Estudiante', image: require('./assets/splash.png') },
    { id: 3, title: 'Autodidacta', image: require('./assets/splash.png') },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.containerCards}>
        {
          datos.map((d) => (
            <View key={d.id} style={styles.cards}>
              <Image
              style={{ width: 70, height: 70 }}
              source={d.image}
              />
              <Text>Job</Text>
              <Text style={styles.text}>{d.title}</Text>
            </View>
          ))
        }
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,24,52)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(15,24,52)',
    fontSize:20
  },
  cards: {
    backgroundColor: 'rgb(255,255,255)',
    width: 140,
    height: 150,
    borderRadius:15,
    alignItems:'center',
    justifyContent: 'center',
  },
  containerCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap:35,
    
  }
});