import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import genres from './genres.json';

const GenresList = ({genre_ids,style}) => {
  return (
    <View style={[styles.contenier,style]}>
      {genre_ids.map(oneGenre => {
        return <Text key = {genres[oneGenre]} style={styles.text}>{genres[oneGenre]}</Text>;
      })}
    </View>
  );
};

let styles = StyleSheet.create({
  contenier: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 10,
    width: 150,
  },
  text: {
    fontWeight:"bold",
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#d8d8d8',
    marginHorizontal: 4,
    borderRadius: 15,
    flexShrink: 1,
    marginVertical: 4,
    fontSize: 11,
  },
});

export default GenresList;
