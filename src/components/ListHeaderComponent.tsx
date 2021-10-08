import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

//list header that shows how many movies is in the list and the total no
ListHeaderComponent = (all, sup) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.ListHeaderComponent}>
        <Text>{` ${sup} of ${all}  `}</Text>
      </View>
    </View>
  );
};

export default ListHeaderComponent;

styles = StyleSheet.create({
  ListHeaderComponent: {
    width: width / 3.5,
    marginTop: 3,
    marginBottom: 8,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
});
