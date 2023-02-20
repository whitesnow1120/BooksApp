import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { color, gutter } from '../theme/constants';

type Props = {
  loading?: boolean;
  error?: { message: string };
};

const BookListEmpty: FC<Props> = ({ loading, error }) => (
  <View style={styles.container}>
    {loading ? (
      <ActivityIndicator testID="loadingIndicator" />
    ) : error ? (
      <Text style={[styles.text, styles.error]} testID="errorText">
        {error.message}
      </Text>
    ) : (
      <Text style={styles.text} testID="emptyText">
        No books
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: gutter * 4,
  },
  text: {
    textAlign: 'center',
  },
  error: {
    color: color.error,
  },
});

BookListEmpty.displayName = 'BookListEmpty';

export default BookListEmpty;
