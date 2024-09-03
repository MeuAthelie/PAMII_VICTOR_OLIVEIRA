import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';

// ...


const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Exercicios React Native</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Lista de Exercicios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Professor</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/1f/ea/cc/1feacc087db961b983802569abdc6d6f.jpg' }}
          style={styles.profilePic}
        />
        <Text style={styles.profileName}> Orkut de Exercicios de Mobile</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.contentText}>Essa Pagina copia o Orkut</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#D1E8E5',
    padding: 20,
    alignItems: 'left',
    flexDirection: 'row',
    justifyContent: 'start',
    marginVertical: 10,
  },
  headerText: {
    color: '#E61977',
    fontSize: 44,
    fontWeight: 'bolder',
  },
  profileSection: {
    alignItems: 'left',
    marginVertical: 35,
    marginHorizontal: 10,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuItem: {
    backgroundColor: '#197EE6',
    padding: 10,
    borderRadius: 5,
    verticalAlign: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
