'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

export const NavigationData = createContext(null);

const NavigationContext = ({ children }) => {
  const pathName = usePathname();
  const [active, setActive] = useState();

  useEffect(() => {
    switch (pathName) {
      case '/life':
        return setActive('life');
      case '/career':
        return setActive('career');
      case '/travel':
        return setActive('travel');
      default:
        return setActive('home');
    }
  }, [pathName]);

  return (
    <NavigationData.Provider value={{ active, setActive }}>
      {children}
    </NavigationData.Provider>
  );
};

export default NavigationContext;
