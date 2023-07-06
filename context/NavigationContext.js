'use client';

import { createContext, useState } from 'react';

export const NavigationData = createContext(null);

const NavigationContext = ({ children }) => {
  const [active, setActive] = useState('home');

  return (
    <NavigationData.Provider value={{ active, setActive }}>
      {children}
    </NavigationData.Provider>
  );
};

export default NavigationContext;
