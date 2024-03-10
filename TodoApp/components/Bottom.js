import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../slices/slices';

export const Bottom = () => {
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, {backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 15}]}>
      <Button title="Incrementar" onPress={() => dispatch(increment())} />
      <Button title="Decrementar" onPress={() => dispatch(decrement())} />
      <Button title="Resetear" onPress={() => dispatch(reset())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
