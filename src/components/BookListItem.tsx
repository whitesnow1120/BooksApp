import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { color, fontSize, gutter } from '../theme/constants';
import { BookDetail } from '../types';

const DefaultThumbnailUrl = 'https://via.placeholder.com/70';

type Props = {
  data: BookDetail;
};

const BookListItem: FC<Props> = ({ data: { imageURL, title, author } }) => (
  <View style={styles.container} testID="bookListItem">
    <View style={styles.left}>
      <Image
        style={styles.thumbnail}
        source={{ uri: imageURL ?? DefaultThumbnailUrl }}
        testID="bookThumbnail"
      />
    </View>
    <View style={styles.right}>
      <Text style={styles.title} testID="bookTitle">
        {title}
      </Text>
      <Text style={styles.author} testID="bookAuthor">
        {author}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: gutter,
    paddingVertical: gutter * 2,
    backgroundColor: color.background.lightGray,
  },
  left: {
    width: 70,
  },
  right: {
    flex: 1,
    paddingLeft: gutter * 2,
    flexDirection: 'column',
  },
  thumbnail: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSize.body,
    marginBottom: gutter * 2,
  },
  author: {
    fontSize: fontSize.small,
  },
});

BookListItem.displayName = 'BookListItem';

export default BookListItem;
