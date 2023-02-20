import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import BookList from './components/BookList';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <BookList />
    </SafeAreaView>
  );
};

export default App;
