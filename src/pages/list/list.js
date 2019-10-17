import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, Item } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ListPage({ navigation }) {
  const [spotList, setSpotList] = useState([]);
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    setTechList(navigation.state.params.techs)
    loadSpotList();
  }, []);

  async function loadSpotList() {
    const mockData = [
      { id: '1', empresa: 'Santander', preco: 50 ,techs: ['Node.js', 'Angular'], foto: '../../../assets/office.jpg'},
      { id: '2', empresa: 'IBM', preco: 50 ,techs: ['Node.js', 'Angular', 'React'], foto: '../../../assets/office.jpg'},
      { id: '13', empresa: 'Easystem', preco: 50 ,techs: ['Angular'], foto: '../../../assets/office.jpg'},
      { id: '14', empresa: 'LifePet', preco: 50 ,techs: ['Node.js', 'React'], foto: '../../../assets/office.jpg'},
      { id: '15', empresa: 'Wine', preco: 50 ,techs: ['Angular'], foto: '../../../assets/office.jpg'},
      { id: '16', empresa: 'Travix', preco: 50 ,techs: ['Node.js', 'React'], foto: '../../../assets/office.jpg'},
      { id: '17', empresa: 'Resultate', preco: 50 ,techs: ['Angular'], foto: '../../../assets/office.jpg'}]

      setSpotList(mockData);
  }

  async function loadTechList() {
    let data = ['Node.js', 'Angular', 'React'];
    setTechList(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Spots List</Text>
        <ScrollView>
          { techList.length > 0 && spotList.length > 0 && techList.map((tech) => {
            return (
                <View style={styles.techRow}>
                  <Text style={styles.techRowTitle}>{ tech }</Text>
                  <FlatList style={styles.listContainer}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={spotList.filter((spot) => { return spot.techs.indexOf(tech) != -1 })}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <View key={item.id} style={styles.spotCard}>
                        <Image source={{url: 'https://tutano.trampos.co/wp-content/uploads/2017/08/2017-07-31_backoffice.jpg'}} style={styles.foto}></Image>
                        <View style={styles.spotTextContent}>
                          <Text style={styles.cardTitle}>{item.empresa}</Text>
                          <View style={styles.subInfoContainer}>
                            <Text style={styles.subInfoText}>R$ {item.preco} • {item.techs.map((tech) => tech + ', ' )} </Text>
                          </View>
                        </View>
                      </View>
                  )}
                  />
                </View>
              )
             })
          }
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageTitle: {
    fontSize: 24,
    color: '#444',
    marginLeft: 10
  },

  listContainer: {
    width: '100%',
    padding: 5,
    // paddingHorizontal: 10,
    // marginTop: 40,
    // marginBottom: 40,
  },

  techRow: {
    marginTop: 20,
    height: 300,
    width: 400,
    margin: 5,
    marginBottom: 25
  },

  techRowTitle: {
    fontSize: 26,
    marginLeft: 5,
    color: '#333'
  },

  spotCard: {
    height: 260,
    flexDirection: 'column',
    width: 350,
    shadowColor: '#000',
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 2,
    backgroundColor: '#FFF',
    marginRight: 15
  },
  foto: {
    flex: 3,
    backgroundColor: '#500',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  spotTextContent: {
    flex: 1,
    padding: 10
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  subInfoContainer: {
    flexDirection: 'row'
  },
  subInfoText: {
    fontSize: 16,
    color: '#555'
  }
});
