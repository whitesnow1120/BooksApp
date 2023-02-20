import React from 'react';
import { render } from '@testing-library/react-native';
import mockBooks from '../../factories/books';
import BookListItem from '../BookListItem';

describe('BookListItem', () => {
  test('should render the title and the thumbnail of a given book', async () => {
    const book = mockBooks[0];
    const { getByTestId } = render(<BookListItem data={book} />);
    expect(getByTestId('bookTitle').children).toContain(
      'Harry Potter: Complete 8-Film Collection (DVD, 2011, 8-Disc Set)',
    );
    expect(getByTestId('bookAuthor').children).toContain('J.K. Rowling');
    expect(getByTestId('bookThumbnail').props.source).toEqual({
      uri: 'http://i.ebayimg.com/00/$(KGrHqV,!g0E6ZCwQ)wpBOuWbUNB,g~~_6.JPG?set_id=89040003C1',
    });
  });
});
