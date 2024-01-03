import { useState, useEffect } from 'react';

const useFullHeight = () => {
    const [mainHeight, setMainHeight] = useState();
  
    useEffect(() => {
      function handleResize() {
        const mainY = window.innerHeight - 60;
        setMainHeight({ height: `${mainY}px`})
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return mainHeight
}

export default useFullHeight;
