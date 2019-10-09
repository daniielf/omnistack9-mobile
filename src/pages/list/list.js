import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function ListPage() {
  const [spotList, setSpotList] = useState([]);

  useEffect(() => {
    loadSpotList();
  }, []);

  async function loadSpotList() {
    const mockData = [
      { id: '1', empresa: 'Santander', preco: 50 ,techs: ['Node.js', 'Angular'], foto: '../../../assets/office.jpg'},
      { id: '2', empresa: 'Santander', preco: 50 ,techs: ['Node.js', 'Angular'], foto: '../../../assets/office.jpg'},
      { id: '13', empresa: 'Santander', preco: 50 ,techs: ['Node.js', 'Angular'], foto: '../../../assets/office.jpg'},
      { id: '14', empresa: 'Santander', preco: 50 ,techs: ['Node.js', 'Angular'], foto: '../../../assets/office.jpg'},
      { id: '15', empresa: 'Santander', preco: 50 ,techs: ['Node.js', 'Angular'], foto: '../../../assets/office.jpg'},
      { id: '16', empresa: 'Santander', preco: 50 ,techs: ['Node.js', 'Angular'], foto: '../../../assets/office.jpg'},
      { id: '17', empresa: 'Santander', preco: 50 ,techs: ['Node.js', 'Angular'], foto: '../../../assets/office.jpg'}]

      setSpotList(mockData);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.listContainer}>
        { spotList.length > 0 && spotList.map((spot) => {
            return (
              <View key={spot.id} style={styles.spotCard}>
                <Image source={{url: 'https://tutano.trampos.co/wp-content/uploads/2017/08/2017-07-31_backoffice.jpg'}} style={styles.foto}></Image>
                <View style={styles.spotTextContent}>
                  <Text style={styles.cardTitle}>{spot.empresa}</Text>
                  <View style={styles.subInfoContainer}>
                    <Text style={styles.subInfoText}>R$ {spot.preco} • {spot.techs.map((tech) => tech + ', ' )} </Text>
                  </View>
                </View>
              </View>
            )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listContainer: {
    paddingHorizontal: 10,
    marginTop: 80,
    marginBottom: 40,
    width: '100%',
    overflow: 'scroll'
  },
  spotCard: {
    height: 260,
    flexDirection: 'column',
    width: "100%",
    shadowColor: '#000',
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 2,
    backgroundColor: '#FFF',
    marginBottom: 15
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
