import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import './App.css';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalContextProvider } from './contexts/GlobalState';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
