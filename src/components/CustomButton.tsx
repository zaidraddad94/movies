import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const CustomButton = ({onPress, active, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={active ? {...styles.buttonActive, ...styles.shadow} : styles.button}>
      <Text style={active ? styles.textActive : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

let styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  buttonActive: {
    height: 30,
    width: width / 3.5,
    backgroundColor: '#47b711',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  button: {
    height: 30,
    width: width / 3.5,
    backgroundColor: '#d8d8d8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textActive: {color: 'white', fontWeight: 'bold'},
  text: {color: 'black', fontWeight: 'bold'},
});

export default CustomButton;
