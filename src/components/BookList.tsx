import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useGetBooks } from '../hooks';
import { BookDetail } from '../types';
import BookListEmpty from './BookListEmpty';
import BookListHeader from './BookListHeader';
import BookListItem from './BookListItem';
import Separator from './Separator';

const BookList = () => {
  const { books, error, loading, refetch } = useGetBooks();
  return (
    <FlatList
      data={books}
      renderItem={renderItem}
      ListHeaderComponent={() => (
        <BookListHeader title="Toto's books" onReload={refetch} />
      )}
      ListEmptyComponent={() => (
        <BookListEmpty error={error} loading={loading} />
      )}
      ItemSeparatorComponent={Separator}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const renderItem: ListRenderItem<BookDetail> = ({ item }) => (
  <BookListItem data={item} />
);

BookList.displayName = 'BookList';

export default BookList;
