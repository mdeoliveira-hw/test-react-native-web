import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Router, Routes, Route} from './components/Router';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Home from './screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router>
        <Routes>
          <Route element={<Home />} path="" />
          <Route element={<Screen1 />} path="screen1" />
          <Route element={<Screen2 />} path="screen2" />
        </Routes>
      </Router>
    </SafeAreaView>
  );
};

export default App;
