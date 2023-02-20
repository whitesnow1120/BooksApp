import { useEffect, useState } from 'react';
import { fetchBooks } from '../api';
import { BookDetail } from '../types';

type UseGetBooksType = () => {
  loading: boolean;
  error: any;
  books: BookDetail[];
  refetch: () => Promise<void>;
};

export const useGetBooks: UseGetBooksType = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [books, setBooks] = useState<BookDetail[]>([]);

  const getBooks = async () => {
    try {
      setLoading(true);
      setBooks([]);
      const response = await fetchBooks();
      setBooks(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return {
    loading,
    error,
    books,
    refetch: getBooks,
  };
};
