import React, { useEffect, useState } from 'react';

const ScrollToTopOnNavigate = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handlePopstate = () => {
    window.scrollTo(0, scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [scrollPosition]);

  return null;
};

export default ScrollToTopOnNavigate;
