import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('IDR');
  
  // Hardcoded exchange rates (IDR as base)
  const rates = {
    IDR: 1,
    USD: 0.000064, 
    CAD: 0.000088,  
    QAR: 0.00023,   
    MYR: 0.00030    
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates }}>
      {children}
    </CurrencyContext.Provider>
  );
};