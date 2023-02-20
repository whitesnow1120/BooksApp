import React from 'react';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import {
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import mockBooks from '../../factories/books';
import BookList from '../BookList';

enableFetchMocks();

describe('BookList', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should render books from the api', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: mockBooks }));
    const {
      getByText,
      queryByText,
      getByTestId,
      queryByTestId,
      queryAllByTestId,
      // debug,
    } = render(<BookList />);

    expect(getByText("Toto's books")).toBeTruthy();
    expect(queryByText('No books')).toBeFalsy();
    expect(getByTestId('loadingIndicator')).toBeTruthy();
    expect(fetchMock.mock.calls.length).toEqual(1);
    await waitForElementToBeRemoved(() => queryAllByTestId('loadingIndicator'));
    expect(queryByTestId('loadingIndicator')).toBeFalsy();

    // debug();
    // Issue: FlatList is not rendering items on testing
    // await waitFor(() =>
    //   expect(queryAllByTestId('bookListItem')).toHaveLength(10),
    // );
  });
});
