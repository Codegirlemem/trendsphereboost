import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const headerRef = useRef();
  const dashboardRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();

  function scrollToView(ref) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <ScrollContext.Provider
      value={{
        scrollToView,
        headerRef,
        dashboardRef,
        contactRef,
        aboutRef,
        servicesRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined)
    throw new Error('ScrollContext was used outside of the ScrollProvider');
  return context;
}
