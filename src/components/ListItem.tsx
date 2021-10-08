import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';
import env from '../../environments/env.json';
import GenresList from './GenresList';

//single list item is renderd here
let AppListItem = (item, navigation) => {
  return (
    <TouchableOpacity
      style={styles.contaner}
      onPress={() => navigation.navigate('MovieView', {id: item.id})}>
      <View style={{flexDirection: 'row', height: null, flex: 1}}>
        <Image
          style={styles.poster}
          source={{uri: env.IMAGE_BASE_URL + item.poster_path}}
        />
        <View style={styles.column}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}> {item.title}</Text>
          <Text style={{color: '#9d9d9d', paddingTop: 10, fontWeight: 'bold'}}>
            {'  '}
            {item.release_date}
          </Text>
          <GenresList genre_ids={item.genre_ids} />
        </View>
      </View>
      <Text style={styles.absolute}>{item.vote_average * 10}%</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contaner: {
    paddingVertical: 15,
    borderRadius: 10,
    width: null,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginBottom: 15,
    marginHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  column: {
    flexDirection: 'column',
    height: null,
    flex: 1,
    paddingLeft: 15,
  },
  absolute: {
    position: 'absolute',
    right: 15,
    bottom: 10,
    color: '#53ba24',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default AppListItem;
