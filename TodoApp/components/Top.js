import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { selectCount } from '../slices/slices'

export const Top = () => {
  const count = useSelector(selectCount);

  return (
    <View style={[styles.container, {backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}]}>
      <Text style={{color: 'white', fontSize: 50}}>Contador: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
