import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ControlPage from './pages/ControlPage';

const App: React.FC = () => {
  return (
    <section className="App">
      <Header />
      <ControlPage />
    </section>
  );
}

export default App;
