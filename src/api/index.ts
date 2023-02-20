import { API_BASE_URL } from '../config';
import { BookDetail } from '../types';

export const fetchBooks = async (): Promise<BookDetail[]> => {
  const url = `${API_BASE_URL}/books.json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
