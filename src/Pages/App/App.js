import React from 'react';
import Toolbar from '../../Components/Toolbar';
import Zahialga from '../../Components/Zahialga';
import BurgerPage from '../BurgerPage';
import OrderPage from '../OrderPage';
import './App.css';

function App() {
  return (
    <div>
      <Toolbar />
      <main className='Content'>
        <BurgerPage />
        {/* <OrderPage /> */}
      </main>
    </div>
  );
}

export default App;
