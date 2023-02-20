import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color, fontSize, gutter } from '../theme/constants';

type Props = {
  title?: string;
  onReload?: () => void;
};

const BookListHeader: FC<Props> = ({ title, onReload }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={onReload} style={styles.button}>
      <Text style={styles.buttonText}>Reload</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: gutter * 2,
  },
  title: {
    fontSize: fontSize.title,
    textAlign: 'center',
    marginVertical: 0,
  },
  button: {
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: fontSize.small,
    color: color.primary,
    fontWeight: '600',
  },
});

export default BookListHeader;
