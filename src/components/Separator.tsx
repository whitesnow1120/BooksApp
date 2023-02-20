import React from 'react';
import { StyleSheet, View } from 'react-native';
import { color } from '../theme/constants';

const Separator = () => <View testID="separator" style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: color.separator.light,
  },
});

export default Separator;
