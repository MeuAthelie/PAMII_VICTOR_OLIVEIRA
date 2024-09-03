import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Modal, ImageBackground, VirtualizedList, StyleSheet } from 'react-native';


const animeImages = [
  { id: '1', uri: 'https://i.pinimg.com/564x/c2/62/6b/c2626bd8ba4192180ab22a3555a9688a.jpg' },
  { id: '2', uri: 'https://i.pinimg.com/564x/44/19/6c/44196c0da9adc6377074c9e3cfc347ad.jpg' },
  { id: '3', uri: 'https://i.pinimg.com/564x/c2/36/dd/c236ddec94416f49216e6b8d2db86074.jpg' },
  { id: '4', uri: 'https://i.pinimg.com/564x/e3/64/1a/e3641adecd1d8bc08d59027b75bada5f.jpg' },
  { id: '5', uri: 'https://i.pinimg.com/564x/55/93/be/5593beb9c8d9a7c390ab053e6e2de0ad.jpg' },
  { id: '6', uri: 'https://i.pinimg.com/564x/80/4f/ef/804fefe4deb0e6ece2e58075462f2a06.jpg' },
  { id: '7', uri: 'https://i.pinimg.com/564x/fc/b6/78/fcb6789ef244c1549276ab3bff4ca9d6.jpg' },
  { id: '8', uri: 'https://i.pinimg.com/564x/80/6d/d4/806dd4f8bfc04548e104769224dafbbe.jpg' },
];

const getItem = (data, index) => data[index];
const getItemCount = (data) => data.length;

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/28/f8/ed/28f8ed534ef1a06d9d05ec2eea593c30.jpg' }} resizeMode="stretch" style={styles.background}>
        <Button title="Clique aqui" onPress={() => setModalVisible(true)} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Essa pagina não serve para nada mas voce pode digitar algo aqui"
              onChangeText={setText}
              value={text}
            />
            <Button title="E nada acontece" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
        <VirtualizedList
          data={animeImages}
          initialNumToRender={4}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.id}</Text>
              <ImageBackground source={{ uri: item.uri }} style={styles.image} />
            </View>
          )}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default App;
