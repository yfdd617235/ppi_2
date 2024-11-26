import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Esto hace que la página se desplace a la parte superior
  }, []);

  return null; // Este componente no necesita renderizar nada
};

export default ScrollToTop;
